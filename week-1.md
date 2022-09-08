## What Is DevOps?

![What is DevOps](./assets/img/what-is-dev-ops.png)

Software Engineering, like any human-focused endeavour, is not an exact science. As such, definitions can be troublesome. However, we should at least try to consider industry narratives surrounding DevOps.

DevOps is a reaction to the change in the way teams deliver software. Speaking broadly, you will know two different development methodologies: agile and waterfall. Both focus on teams delivering software. However, the waterfall method follows a linear development path, whereas Agile has quick iterations, known as sprints. Agile was a response to the slow release cycles advocated by the waterfall method. However, while the iterative cycles addressed this issue, development and operations teams still functioned in isolation.

::: tip DEFINITION
:book: **Development**

Responsible for developing the features of a software product.
:::

::: tip DEFINITION
:book: **Operations**

Responsible for maintaining the uptime of the production, staging, and development environment.
:::

> > [DEVOPS INTEGRATES the two worlds of development and operations, using automated development, deployment, and infrastructure monitoring]()

DevOps is a culture that combines the historically separate functions of Development and Operations. It is a relatively new idea, widely credited to [Patrick Debois](https://twitter.com/patrickdebois?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor), the organiser of the 2009 DevOpsdays conference. Since this time, [according to the team at Amazon Web Services](https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/welcome.html), DevOps consists of the following functions:

- Continuous Integration
- Continuous Delivery/Deployment
- Infrastructure as Code
- Monitoring and Logging
- Communication and Collaboration

::: warning TASK

## Task 1

**Time: 40 mins**

What does DevOps mean to you

:::

## How are we going to learn DevOps?

::: tip Important Point
:star:

This course focuses on DevOps and not how to program. While we will explore a real-world sample program and construct a CI/CD pipeline around it, I will not be overly focused on the underlying technology. For your assessment, and to fully understand the in-class examples, you will need to explore the underlying technology in your own time.

:::

The above question is tricky to answer. The reality is that a university project does not require sophisticated DevOps tooling. However, it would be remiss to deny you an overview of the latest industry techniques. Nonetheless, the reality is that we will only be able to scratch the surface of what is possible. I want you to think of this module as a flavour of what DevOps is.

This course focuses on DevOps and not how to program. While we will explore a real-world sample program and construct a CI/CD pipeline around it, I will not be overly focused on the underlying technology. For your assessment, and to fully understand the in-class examples, you will need to explore the underlying technology in your own time.

## Beginning Our Application

::: tip Important Point
:star:

To follow along with the in-class examples, you will need to install:

- [git](https://git-scm.com)
- [node](https://nodejs.org/en/download/)

:::

```shell

	npx create-next-app
	What is your project named? solent-room-creator

```

- npm run dev
- visit the application URL; you should see the the template
- let's start to order some of our files
  - create a src directory
  - move pages into it
  - move styles into it
- src/pages/index.js

import Head from "next/head";
import styles from "../styles/Home.module.css";

```js
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solent Room Finder</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Solent's Room Finder</h1>
      </main>
    </div>
  );
}
```

- golbal.css
- src/pages/about.js

```js
import Head from "next/head";

export default function about() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> About </h1>
      <p>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum atque doloremque
        molestiae cum quibusdam corporis aspernatur expedita repellat facere unde
        provident dolore laborum sapiente, necessitatibus itaque quidem dicta commodi.
        Sunt.
      </p>
    </div>
  );
}
```

- update the readme

- Push your site to github (I hope this is second nature; if not, please research how to do this)

  -
  - git remote add origin git@github.com:joeappleton18/solent-room-finder.git
  - git push main master

- npm install -D netlify-cli

- ./node_modules/.bin/ntl init
  - Opening https://app.netlify.com/authorize?response_type=ticket&ticket=e233142c1293710f9e3e881f915ad7b2
  -
  - - Create & configure a new site
  - > joeappleton18's team
  - Site name (optional): undefined
  -
- ```
  Admin URL: https://app.netlify.com/sites/the-awesome-joeappleton18-site
  URL:       https://the-awesome-joeappleton18-site.netlify.app
  Site ID:   c8fcc425-1d2e-4ffc-96ab-59ab21b0e646
  ```

  - Netlify CLI needs access to your GitHub account to configure Webhooks and Deploy Keys. What would you like to do? Authorize with GitHub through app.netlify.com
  - ? Your build command (hugo build/yarn run build/etc): next build
    - ? Directory to deploy (blank for current dir): (.next)
  - Netlify functions folder: netlify/functions
  - We're going to install this Build Plugin: Essential Next.js plugin
  - OK to install? Yes

- ./node_modules/.bin/netlify open // open admin panel
- add to commands to `package.json`
- `Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
4:18:22 PM: info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules`

- re push 
- you may get this error



