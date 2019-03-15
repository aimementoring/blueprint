# AIME

![AIME](https://d2ylaz7bdw65jx.cloudfront.net/assets/images/aime-logo.svg)

<a href="https://npmjs.com/package/aime-blueprint">
  <img src="https://img.shields.io/npm/dm/aime-blueprint.svg">
</a>
<a href="https://npmjs.com/package/aime-blueprint">
  <img src="https://img.shields.io/npm/v/aime-blueprint.svg">
</a>
<a href="https://npmjs.com/package/aime-blueprint">
  <img src="https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg">
</a>
<a href="https://npmjs.com/package/aime-blueprint">
  <img src="https://github.com/aimementoring/blueprint/coverage/badge-lines.svg">
</a>
<a href="https://npmjs.com/package/aime-blueprint">
  <img src="https://github.com/aimementoring/blueprint/coverage/badge-functions.svg">
</a>
<a href="https://npmjs.com/package/aime-blueprint">
  <img src="https://github.com/aimementoring/blueprint/coverage/badge-statements.svg">
</a>
<a href="https://npmjs.com/package/aime-blueprint">
  <img src="https://github.com/aimementoring/blueprint/coverage/badge-branches.svg">
</a>

[![https://nodei.co/npm/aime-blueprint.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/aime-blueprint.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/aime-blueprint)

## Blueprint

The main idea of this project is to define some standards for all AIME platforms. Here you'll find design definitions and React components which are used across all the platforms.

## Table of Contents

1. [Installation](#installation)
2. [Design UI](#design-ui)
3. [What should be here](#what-should-be-here)
4. [What should not be here](#what-should-not-be-here)
5. [How to's](#how-tos)

   - [How to create a new component](#how-to-create-a-new-component)
   - [How to test components](#how-to-test-components)
   - [How to build styleguide](#how-to-build-styleguide)
   - [How to build library](#how-to-build-library)
   - [How to deploy](#how-to-deploy)
   - [How to test locally from a project](#how-to-test-locally-from-a-project)

6. [NPM Commands](#npm-commands)

### Installation

Run the following command:
`yarn add aime-blueprint` or `npm i aime-blueprint --save`.

Now import the component/components in the file you will use it:
`import { Button, Input } from 'aime-blueprint`;

Now you are ready to use them :)!

### Design UI

### What should be here

1. Every component we use in more than one project should be here, so we can reuse code.
2. Every component we are not still using in a project, but it is useful as a UI Design reference, and we will add in one or multiple project should be here.
3. Every function we use in more than one project should be here, inside utils, so we don't maintain same function in multiple places.

### What should not be here

1. Really big component we know is specific for a project.
2. Things we know are temporal and we are not going to add unit test, and this kind of things.

### How to's

#### How to create a new component

We have a folder called **commands** where I added a command to create a new component with all folder structure. The way you can use it is running in the terminal inside commands folder `sh createComponent componentName` replacing componentName by your component. You have to write the component name in _camelCase_ notation.
After you run the command, you will see inside **src/lib/components** folder a new folder with your component, and 5 files inside:

- **componentName.module.scss** (sass file for your component styles)
- **componentName.test.js** (file to run unit tests over your component). It's also written with some default settings, but you have to update with your component props, and you should add custom unit test there (Please, it's important you add those unit test)
- **componentName.md** (This one is used by styleguide to generate the example of your component). Again, it's important if you can complete this file with a complete example about usage of your new component.
- **componentName.js** (This one should contain all the logic of your component, it's the React component itself).
- **index.js** (probably you don't need to change anything here, because it's the file responsible of exporting your component so it's easy to import from a different place)

After you created the component structure folder, you wrote unit test, you wrote your full react component and you added the markdown example, we are ready to test everything, so we go to the [next step](#how-to-test-components)

#### How to test components

Nice, so you have already created a new component :+1:, that is great!
It's time to check if everything works as expected.

1. First we should check if unit test are passing, so we run `yarn test`. It will create by default a **_snapshot_** folder inside our component folder. This folder is used by jest to speed up unit test, and check that everything is working as it is expected. Also this command will show you the whole project test coverage, and it will show an error if any unit test detect an error.
2. Now we generate our build package. Read [How to build library](#how-to-build-library) for that.
3. Also it's time to build the styleguide docs, and we can read how to do it in [How to build styleguide](#how-to-build-styleguide)

#### How to build library

When all unit test are passing, we are closer to see our component working. Now we have to run a command to generate the library we will import from different projects, and the command is `yarn build:lib`.
If your javascript is ok (and it should be ok because unit tests are passing), it will run completely without problems.

#### How to build styleguide

It's time to generate styleguide documentation, and the command is `yarn build:styleguide` (this command generates automatically **styleguide** folder)
Lets see our component!!! :tada: We run `serve -s styleguide` (you have to previously install serve command, you can use `npm i serve -g` if you don't have it). This command loads your styleguide folder, and copies in your clipboard the url to open the project...so you can open now your browser and paste the url. You should find in components list the component you created, with the example you wrote in markdown file, proptypes specs and example code.

Does it work? :clap::clap:

#### How to deploy

Ohhh, you are ready to deploy...that's amazing!:muscle:
Steps for deploy are:

1. If you didn't follow previous steps ([How to test components](#how-to-test-components), [How to build styleguide](#how-to-build-styleguide), [How to build library](#how-to-build-library)), you can run `yarn deploy` command, which basically runs unit test, generate the library package and create styleguide docs. It's important to check that all unit tests are passing, and to open styleguide to confirm your component is there and it works as expected.
2. Add your updated files you want to commit with `git add /file1 /file2 ...`.
3. Run commit command to save los changes on git `git commit -m "COMMENTS OF THE CHANGE"` adding a comment of what have you updated, changed or fixed.
4. Push your changes to your branch `git push origin BRANCH_NAME`.
5. Create a PR to master.
6. After PR is approved and merged to master, we are ready to run generate the new version. We have inside **commands** folder a command to do that. We only need to know current version of aime-blueprint, and we should define if our change is a MINOR, MAJOR or PATCH change, to upgrade our library version. Version number has the format PATCH.MAJOR.MINOR. To do the update we run on terminal inside commands folder the command `sh publish VERSION`. And that's it. Now we have to wait maybe 2 minutes, maybe 30 minutes until new version appear on npm library and it's ready to be used.

Some examples about how to increase versions are:

1. **MINOR change**: We are on version `1.0.3` and we just fixed an existing component, so it's a minor version we need to publish, we have to run the command `sh publish 1.0.4`.
2. **MAYOR change**: Ohhh, we change the structure of some components, and added a new theme, so we think it's a major version. Library is in version `1.0.4`. So now we have to run `sh publish 1.1.0`.
3. **PATCH change**: It's less common to to have this kind of change, but we updated mostly all components, it was a big refactor, and we upgrade versions of some dependencies we have in the project, so it's a big change. We are in version `1.1.8` so the command we run is `sh publish 2.0.0`.

#### How to test locally from a project

1. Run `yarn` and `yarn deploy` to build correctly the library.
2. If you want to see styleguide running, with hot reload, you should use `yarn start:styleguide`. This is going to run styleguide and every time you make a change, it reloads showing the new changes.
3. If you want to test it as a website, you can run `yarn start`, and it's going to load the index file from **src/index.js**
4. If you want to use your component from a different project to test it locally, you can update **"dependencies:"** attribute in your package.json, adding or replacing the line for **"aime-blueprint"** like this: `json "aime-blueprint": "file:/Applications/XAMPP/htdocs/aime/blueprint/lib"`

### NPM Commands

| Command                     | Description                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| `yarn run build:styleguide` | Generates styleguide folder with all project documentation                                  |
| `yarn run build:lib`        | Generates lib folder with all components to be imported from projects which use the library |
| `yarn run build`            | Build styleguide and lib folder                                                             |
| `yarn run lint-staged`      | Validate javascript code style only on files you have changed                               |
| `yarn run lint`             | Validate javascript code style in the whole project                                         |
| `yarn run fix-lint`         | Fixes some lint errors (not complex ones)                                                   |
| `yarn run fix-code`         | Fixes **javascript** lint errors using prettier (only to be used from VSCode)               |
| `yarn run fix-styles`       | Fixes **scss** lint errors using prettier (only to be used from VSCode)                     |
| `yarn run start`            | Start project for development process in localhost                                          |
| `yarn run test`             | Run all unit tests, and generates coverage report                                           |
| `yarn run deploy`           | Execute all unit test and run build to generate lib and styleguide folder                   |
| `yarn run release`          | Generate a release with a new version (Still not ready to use)                              |
