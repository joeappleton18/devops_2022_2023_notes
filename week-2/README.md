# Week 2: Static Code Analysis

![](./ci-pipeline.png)

> > This is the full continuous integration pipeline we will be setting up. This week, we are looking at the first part: static analysis.

So it has begun: this week, we are starting to build our continuous integration pipeline (CI). We will begin this journey by leaping into static code analysis and code formatting.

::: tip DEFINITION
:book: **Static Code Analysis**
Static code analysis is the process of automatically checking code for potential errors before it runs.
:::

::: tip DEFINITION
:book: **Code Formatting**
Code formatting ensures that you and your team's code follows a consistent style.
:::

What is most exciting is that we can use tools to perform code formatting and static analysis for us specifically:

- Typescript
- JSLint
- Prettier
- Huskey

Using the above tools, we can perform static code analysis and code formatting with little to no cognitive demand.

## Questions to Address

Throughout this week, we will be addressing the following questions:

1. How can we ensure that a team follows a consistent coding standard?
1. How can we enforce these standards?

## Lesson Dependencies

- [You will need to ensure you have the version control tool Git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- While you can use any text editor for this session, I recommend that you install [VS Code](https://code.visualstudio.com/download)

### Getting the week two starting code base

In your command line shell, run:

```shell

git clone --branch week-2-starter-code https://github.com/joeappleton18/solent-room-finder.git solent-room-finder-week-2

- Navigate into the created  `solent-room-finder` folder: `cd solent-room-finder-week-2`
- Install the dependencies: `npm install`
- Run the development server: `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```

## TASK 1: Set up

::: warning TASK 1: Set up
Follow the steps above to, ensure you have the lesson dependencies set up: including the starting code base.
:::

# Static Code Checking

## Typescript

::: tip Important Point
:star:

This is not a deep dive into learning TypeScript; rather, we are just going to be scratching the surface. If you feel like typescript is suitable for your assessment, then you will need to do some further research.

:::

::: tip DEFINITION
:book: **Type Script**
According to its creators, TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.
:::

Put simply, TypeScript allows us to capture errors in our code base before runtime. It is a superset of JavaScript, extending the functionality of its vanilla alternative. However, browsers do not support TypScript; your code will be Transpiled to vanilla JavaScript before it runs in the browser.

**So, why introduce potentially more tooling and complexity into the developer experience?**

To explore the above question, let's consider an example:

```JavaScript
function renderPeople(people) {
	return people.map((p) => (`<div>
		<li> ${p.name} </li>
		<li> ${p.location} </li>
	</div>
	`))
}

console.log(renderPeople("joe"))

```

> > `sample.js`: Typical JavaScript code

## TASK 2: The Problem with JavaScript

::: warning TASK 2: The Problem with JavaScript

Let's consider some ways in which we can cause a runtime error with the above function. Place the function in a `sample.js` file;

- To run it, use the command `node sample.js`
- You'll see the error `people.map is not a function`. This is because we are trying to run an array operation on a String; however, the function is expecting an array of objects.
- Consider a few further ways to cause a runtime error.
- See if you can make the code run correctly.
  :::

You'd be surprised how often type mismatches cause errors. Using TypeScript, we can describe the shape of data passing around our application, capturing errors before we run our code. Let us fix the above example.

First, we need to change the extension of our sample from `.js` to `.ts`
Now, we can start using types:

```JavaScript
type peopleType = {
	name: string;
	location: string;
	[otherOptions: string]: unknown; // allow any additional options
}


function renderPeople(people: peopleType[]) {
	return people.map((p) => (`<div>
		<li> ${p.name} </li>
		<li> ${p.location} </li>
	</div>
`))
}


console.log(renderPeople([{ name: "Joe", location: "Brighton" }]))

```

> > `sample.ts`: the above `sample.js` converted to TypeScript. At the moment, you may not have TypeScript installed, so we can not run this example. However, you should still get editor feedback.

In the above example, notice how we can describe the shape of the data our render people function will accept by defining a `peopleType` (l1). Our editor will now check that `renderPeople` only accepts and array of objects, and each object must have the `name` and `location` property.

## Setting up TypeScript with Next.js

We are using `Next.js` for our sample RoomFinder application. Luckily, ["Next.js provides an integrated TypeScript experience, including zero-configuration setup and built-in types for Pages, APIs, and more"](https://nextjs.org/docs/basic-features/typescript).

## TASK 3: Configuring TypeScript in our sample project

::: warning TASK 3: Configuring TypeScript in our sample project

- To get started with TypeScript on a Next.js project, create an empty `tsconfig.json` file in the root folder of your room tracking application.

- Run your application: `npm run dev`. You will see:

```bash
Please install typescript, @types/react, and @types/node by running:

        npm install --save-dev typescript @types/react @types/node
```

- To follow the instructions, run the command `npm install --save-dev typescript @types/react @types/node`
- Run your application: `npm run dev`. Next.js will then populate your `tsconfig.json` file.
- `tsconfig.json` contains our typescript configuration; there is a slight glitch with manually setting up TypeScript in next JS; to solve this add the below option to `tsconfig.json`:

```json
compilerOptions": {
...
"moduleResolution": "node",
...
}
```

:::

Thats it, we are now ready to start TypeScripting

## TASK 4: TypeScripting

::: warning TASK 4: TypeScripting

I suggest you adopt TypeScript gradually. Start tinkering with the occasional file, adding types: it is therapeutic! With this mantra in mind, let's add some types to `src/components/Filter.js`.

1. First, rename `src/components/Filter.js` to `src/components/Filter.tsx`. Why not `.ts`? This is because our js file has JSX in it.

2. Next, can you figure out how to define a type, called `FilterType`, for the default filter component (~l15)? When you are done, the signature of the function should look like this `export default function Filter(props: FilterType)`. [Here is some further reading](https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures)

3. In your Filter.tsx file, you'll you'll notice that `document.getElementById("form").reset()` shows an error (l.28). This is because typescript can't infer that the element will be a form. [Can you use a type assertion to fix this](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

4. In your route directory, you can now check your application is type safe: `npx tsc`. You probably will get this error:

```bash
 Argument of type 'number | number[]' is not assignable to parameter of type 'number'.
  Type 'number[]' is not assignable to type 'number'.

81                   onChange={n => onSlide(n)}
                                            ~


Found 1 error in src/components/Filter.tsx:81
```

5. Can you see if you can fix the error!

:::

### Task solutions

> > Solution corresponding to the task step number. You should attempt the task before you look at the solutions 😆.

::: details SOLUTION (2) Click me to view the code

```js
type FilterType = {
  capacity: number,
  onSlide: (n: number | number[]) => unknown,
  onReset: () => unknown,
};
```

:::

::: details SOLUTION (3) Click me to view the code

```js
 (document.getElementById("form") as HTMLFormElement).reset();
```

:::

::: details SOLUTION (5) Click me to view the code

```js
type FilterType = {
  capacity: number,
  onSlide: (n: number | number[]) => unknown,
  onReset: () => unknown,
};
```

:::

## Linting

Linting is the technique of using tools to statically analyse a code base to find potential problems. According to the developers behind ESLint, linting has ["the goal of making code more consistent and avoiding bugs."](https://eslint.org/docs/latest/user-guide/getting-started).

Linters have out-of-the-box rules and also the option to add custom rules. You can do things like:

- Ensure there are no unused variable
- Disallow variable redeclaration
- Disallow duplicate keys in objects

["Since version 11.0.0, Next.js provides an integrated ESLint experience out of the box"](https://nextjs.org/docs/basic-features/eslint)

## Setting Up a Linter

As previously mentioned, our room tracking application is built in Next.js, which comes with a configured version of the linting tool ESLint. You can run it by using the command: `npm run lint`. You'll see it tells us `"4:32 Error: Strings must use doublequote."` All is well and good; however, where is this rule coming from? We can set linting rules in, `.eslintrc.json`. There are hundreds of rules we can set; however, more often than not developers choose an existing rule set by using the `extends` property.

## TASK 5: Editor support

::: warning TASK 5: Editor Support

As it stands, we have to run `npx tsc` to lint our code. While this is not overly inconvenient, would it not be nice if our editor highlighted and, where possible, automatically fixed linting errors. Well, with the VSCode extension, we can do just this:

- [Install the VSCode ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- Next, update your `.vscode/settings.json` to automatically lint and fixe errors on save:

```javascript
{
  ....
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
  ...
}

```

> > .vscode/settings.json: these setting may already be in there for you.

- Boom, now the majority of your linting errors will be fixed for you! Don't believe me, try adding an unused import to the top of one of your files (e.g., `import { useState } from "react";`) when you save the file it should automatically be removed for you.

:::

## TASK 6: Setting up better linting

::: warning TASK 6: Setting up better linting

- At the moment we have quite basic linting, let's fix this.
- As previously mentioned, we can easily extend the linter with our own rules or third-party rules. Let's go for the latter option and install typescript-eslint/eslint-plugin.

1. in your terminal run: `npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser`

2. While we are at it, let's also extend the current config with `eslint:recommended`, this comes with the eslint core install. Update your `.eslintrc.json` so it resembles the below.

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "quotes": ["error", "double"],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

> > .eslintrc.json: your version should resemble the above

3. Run `npm run lint` there should be a lot more errors now; to finish the task, fix the errors. Mostly, you should just be able to navigate to each file and save it: VSCode will fix the linting issues.
   :::

## Prettier

Prettier is an opinionated code formatter; however, as you have seen our linter already formats code (to a degree) It may at first seem similar to a linter; however, on closer inspection, there are some subtle differences:

- Linters are mostly worried about code quality: eg no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-error

- Prettier prints your whole program from scratch applying only formatting rules: eg: max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style. As a developer, you never have to worry about formatting your code again.

## TASK 7: Installing Prettier

::: warning TASK 7: Installing Prettier

Let's get going with prettier awesomeness:

1. Install the dependencies: `npm install --save-dev eslint-config-prettier prettier`
2. Notice how we installed `eslint-config-prettier` along with `prettier`.
   ESlint can do some formatting for us; however, we don't want it to conflict with prettier. The `eslint-config-prettier` package ensures that only prettier's formatting rules are used. We can use it by adding `prettier` to the extends array of our `eslintrc.json` file:

````json
`eslintrc.json`

```JavaScript
{
  ...
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
 ....
}
````

> > `eslintrc.json`: adding prettier

- You can now run prettier: `npx prettier --write .`. This command will automatically fix the formatting in your code.

- [Like ESlint, there is a VS code plugin for prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Install the plugin.

- We can now update our `./vscode/settings.json` file to auto format on save:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.format": true
  },
  "eslint.validate": ["javascript"],
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

> > .vscode/settings.json: these are what my final settings look like

- Finally, in your route directory create the following two files: `.prettierignore` and ` .prettierrc.json`. `.prettierrc.json` allows us to add custom rules, let's add the following:

```json
{
  "printWidth": 80,
  "bracketSpacing": false
}
```

`.prettierrc.json`: Prettier already has a solid rule set; above, I am tweaking it to my preferences. [Have a play in the playground if you want to add further rules](https://prettier.io/playground/)

:::

## Huskey

If you've got this far, you've come a long way: give yourself a pat on the back. However, we are not quite finished. Would it not be nice if we could automatically run checks (e.g., linting, formatting, testing, and type checking) before each commit. This is where Huskey comes into play.

[According to the developers, "Husky improves your commits and more 🐶 woof! You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.](https://typicode.github.io/husky/#/)

## TASK 8: Installing Huskey

::: warning TASK 5: Install Huskey

- npx husky-init && npm install
- Next, we need to set up some scripts in our package.json file, these will run on each commit

  ```json

  "scripts":
  	...
  	"prettier": "prettier --write .",
    	"types": "tsc",
  	...
  ```

  > > > `package.json`: updated rules

- Finally, tell Husky which scripts to run in the `.husky/pre-commit` file. Your file should resemble the below:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "running pre-commit checks"

## prettier

npm run  prettier
npm run types
npm run lint
```

- Now, when you make a commit the above checks should run. If they fail, your code won't be committed.
  :::

## Further Reading

### TypeScript

- [The TypeScript Hand Book, well worth flicking through∫](https://www.typescriptlang.org/docs/handbook/intro.html)

## Code Formatting and Linting

- [Check out all the formatting rules you can use for prettier](https://prettier.io/playground/)
