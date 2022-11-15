
# Week 7: Authentication Testing Strategies and Deployment

<center> <img src="./next-auth.png"/> </center>

##  Solent, We Now Have Authentication! 

Boom, the latest version of our room finder application now has authentication (side tutorial to come soon on how to do this); this raises a few DevOps concerns that we will address this week:

1. How do we test our application when it is locked down? 
1. How do we manage authentication across different environments?	

[Further, we can also upload room images through the image provider Cloudinary;  this raises the further question:](https://cloudinary.com/)

3. How do we facilitate third-party providers, such as Cloudinary, across different environments?



::: tip DEFINITION
:book: **JAM Stack**

[When making a proof of concept, such as our Room Finder, I am a fan of the JAM stack philosophy](https://jamstack.org/). According to this philosophy, we should create an application by orchestrating third-party APIs. In other words, don't create functionality yourself if you can use a third-party API that already performs this functionality. Case in point: rather than processing images ourselves, we will be using Cloudinary. Furthermore, rather than setting up an authentication system, we'll use a third-party OAuth provider  (e.g., GitHub).
:::

## Lesson Dependencies 🔨

- [You will need to ensure you have the version control tool Git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll need to know the basic Git Commands (e.g., `checkout -b`, `push`, and `commit`)
- While you can use any text editor for this session, I recommend that you install [VS Code](https://code.visualstudio.com/download)
- You will need access to a MongDB database.
  -  You can install your own locally
  -  Use [AtlasDB](https://www.mongodb.com/atlas/database)
- [You need a Cloudinary account](https://cloudinary.com/)
- [You need a GitHub account](https://www.github.com)

::: warning TASK 0

Lecturer to give an overview of the latest version of the Room Finder

:::

## TASK 0.1: Get the Starter Application

In your command line shell, run:

```shell
git clone --branch week-7-starter-code  https://github.com/joeappleton18/solent-room-finder.git week-7

```

::: tip

**experimental fix**

Are the NPM modules taking too long to install? Instead of cloning the above version of our room finder application, try this version:

```bash
git clone --branch week-7-starter-code_with_node_modules  https://github.com/joeappleton18/solent-room-finder.git week-7
```
The above version has the node modules stored in the repository.

:::


As discussed above, I am a fan of delegating functionality to third-party providers. The Room Finder is currently using: 

- GitHub (to manage authentication) 

- [Cloudinary (to manage image uploads, processing and optimisation). This means there are a few more environment variables to set; this will be the focus of Task 1.](https://cloudinary.com/)

This means there are a few more environment variables to set; this will be the focus of this task.

To get started:

- Copy the `.env.local.example` file in this directory to `.env.local`, which will be ignored by Git)
- Within `.env.local.local`  set your `MONGODB_URI` 
 
We now need to set up an authentication methods. The room finder uses NextAuth for authentication: it is very nice! [Currently, NextAuth allows us to use around 30 different sign-in methods for our application](https://next-auth.js.org/providers/). I've chosen GitHub as it's simple to set up. Let's get started:

<iframe src="https://app.tango.us/app/embed/aa7f903b-5671-4505-ba79-3efe9551eca5?iframe" sandbox="allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin" security="restricted" title="Tango Workflow" width="100%" height="600px" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" allowfullscreen="allowfullscreen"></iframe>

Once you have registered your OAuth application, take note of the following values:

- `Client ID`
- Click generate a new `secret` within your OAuth application, and copy the secret.
- Set the following variables in your .env.local. 
  - GITHUB_ID="\<ClientID\>"
  - GITHUB_SECRET="\<secret\>"

**Setting up Cloudinary**

- Register for a new Cloudinary account 
- From your Cloudinary dashboard, take note of the following value: 
  - Cloud Name
- Set `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` to your `cloud name`.
- Run your application: `npm run dev`.
- If all has gone well, you should now be able to login using GutHub.

**save your .env somewhere; there is no need to set it up again every week!*

## Thinking About Authentication

This week you have seen we have added authentication to our Room Finder application. This, however, means our tests no longer work :(. Since the application is locked down, we can't test it. Further, as we are using a third-party provider, Cypress won't leave http://localhost:3000 to log us in.

We have a few options here:

1. [We can log Cypress in programmatically](https://next-auth.js.org/getting-started/introduction
1. Allow email authentication for testing only, and set up a test account.
1. Disable authentication for our tests. 

Options 1  and 2 are good solutions; however, they are complex to implement. Remember, testing is to serve us to deliver our applications faster. As such, in this case, I went with option 3.  For the next task, let's implement this solution:

## Task 1: Disable Authentication for Testing

Let's consider how we might disable 

Let's consider how we might disable authentication when testing our application. Remember, we have `env.test` that populates our testing environment variables. Add the following environment variable to this file: 

```js
....
NEXT_PUBLIC_TESTING=true;
```
>>  env.test

The `NEXT_PUBLIC` part of the above variable means it will be accessible from our application's client-side code.  Let's consider how we might use it. 

Currently, if you look at `src/pages/create.tsx`, you can see we are using `useSession`, provided by Next auth, to authenticate our application. 

We simply grab the session out of `useSession()` and if it is not set we return "unauthorised":

```js
 if (!session) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <h1> Unauthorised </h1>
      </div>
    );
  }

```
>> `src/pages/create.tsx`

We take a similar approach when securing our API (see, src/pages/api/rooms/[id].tsx). 

Let's update our application so it does not check the session when we are testing. Within `src/pages/api/rooms/[id].tsx` and `src/pages/api/rooms/index.tsx:`

Simply change the following line:

```js
if (!session) {
    return res.status(404);
  }
```
to

```js
if (!session && !process.env.NEXT_PUBLIC_TESTING) {
    return res.status(404).json({success: false});
  }
```
That's our API sorted!

Next, for the client side, we are going to write a wrapper hook for `useAuth`. 

- Create the file `src/hooks/useNextAuth.ts` and enter the following code:

```js
import { useSession } from "next-auth/react";

let session = useSession;

if (process.env.NEXT_PUBLIC_TESTING) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  session = () => ({ data: { session: true } });
}

export default session;
```

>> `src/hooks/useNextAuth.ts`

Above, we return a mock session if `NEXT_PUBLIC_TESTING` is set. If it's not then we simply return the normal useSession, no change in functionality. 

Next, in each place where we `import {useSession} from "next-auth/react";` we need to update this to something along the lines of `import useSession from "../hooks/useNextAuth` (this path will vary slightly). Update:

- src/pages/index.tsx
- src/pages/create.tsx
- src/pages/rooms/[id]/edit.tsx

- Now, run your application in test mode: `npm run test`. If all has gone well, you should now see that authentication is no longer running. 
- To check everything still works run: `npm run cypress:run`, the tests should be back in the green!
- Finally, update your `.github/workflows/cypress.yaml` setting the following environment variables:


```js
env:
          MONGODB_URI: "mongodb+srv://test:test@cluster0.x08wt.mongodb.net/rooms_test?retryWrites=true&w=majority"
          NEXT_PUBLIC_TESTING: true
          NEXTAUTH_SECRET: "sdhdshsdhsdhsdhsdhsdsdhwe67weew"
```
>> `.github/workflows/cypress.yaml`


## Task 1.1 (Advanced)

::: warning TASK 1.1 (Advanced)

Feeling ambitious, can you figure out how to mock Next Auth? Yes, I said above this is not worth doing:  this still holds; however, as a pure learning task it's appealing.

:::


::: tip What about testing our image uploader?
:star:

We are using Cloudinary to provide our image uploads and manipulations. We need to trust that this multi-billion dollar company have tested their code base. In general, I don't test the functionality of third-party service providers. 

:::

## It's Time To Deploy!

OMG, our application is ready to be deployed! Next, the week will consider the basics of deployment. Next week, we will look at the nitty-gritty of staging, development, and production environments. 

I am not one to boast; however, check this out (https://solent-room-finder.vercel.app/). Yes, it's a deployed version of our Room Finding Application. 

## Vercel 

I recommend using Vercel as your hosting option. Apart from Cypress, it's one of the most amazing pieces of technology I've seen recently. This week, I want you to  work independently to work out how to host your own version of the room finding application. 

## Task 2: Deploying our application 

Deploying is straight forward: most of the time! First, you need to make sure that your application is hosted in a GitHub repository and has a main branch. To do this you will need run the following commands:

- git remote remove origin 
- git remote add `<your remote repo>`
- git checkout -b "main"
- git push origin main

Next, create an account with [vercel.com](vercel.com) and:
  - Create a new project 
  - When prompted select "Import Git Repository"
  - Find the room finder repository in the list and select Import. 

Next will try and build your application; however, we need to set up our environment variables. Set the following variables from your project's settings section:

- `MONGODB_URI`  - `mongodb+srv://<username>:<password>@cluster0.x08wt.mongodb.net/rooms-production?retryWrites=true&w=majority`
- `NEXTAUTH_URL` - should be your application's URL (e.g. - `https://solent-room-finder.vercel.app`)
- `NEXTAUTH_SECRET` - just put some random letters in here
- `NEXT_PUBLIC_CLOUDINARY_PRESET` - same as development 
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` - same as development

Set up a new GitHub OAuth application for your newly created domain and add the:

- `GITHUB_SECRET` 
- `GITHUB_ID`

Finally, re-deploy your application from the Vercel dash! If all has gone well, your application should be deployed!