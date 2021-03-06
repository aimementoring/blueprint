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

[![Build Status](https://travis-ci.com/aimementoring/blueprint.svg?branch=master)](https://travis-ci.com/aimementoring/blueprint)
[![Coverage Status](https://coveralls.io/repos/github/aimementoring/blueprint/badge.svg?branch=master)](https://coveralls.io/github/aimementoring/blueprint?branch=master)

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
   - [How to build sassdoc](#how-to-build-sassdoc)
   - [How to build library](#how-to-build-library)
   - [How to deploy](#how-to-deploy)
   - [How to locally test blueprint components in your project](#how-to-locally-test-blueprint-components-in-your-project)

6. [NPM Commands](#npm-commands)
7. [Troubleshooting](#troubleshooting)

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

To begin you will need to navigate to the folder named **commands**, this can be done via [vscode](https://code.visualstudio.com/docs/editor/integrated-terminal) build in terminal (Windows: command line with the command instruction
`cd commands`.
Once you are in the `commands` folder you can run all the following command instructions from this folder.

All naming conventions for Blueprint `folders` and `files` are: _camelCase_

To automatically create the files required to add components to blueprint you can run the following command `sh createComponent [yourComponent]` replacing `[yourComponent]` with the name of your new component.

Automating the initial creation process is preferred but not a must the files can be manually created also. (Manual creation for Windows is the only option)

The files that are expected in a component folder when creating a new component, are listed below;

- `yourComponent.js`
- `yourComponent.md`
- `yourComponent.module.scss`
- `yourComponent.test.js`
- `index.js`

After you run your initial test you will also see the folder `__snapshots__` this folder is where all the test snapshots of your component live.

All component files are located in **src/lib/components/yourComponent** folder.

| Filename                      | Description                                                                                                                                                                                                 |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **yourComponent.module.scss** | SASS file for your component styles                                                                                                                                                                         |
| **yourComponent.test.js**     | Unit tests for your component. Includes some default settings, but you have to update with your component props, and you should add custom unit test there (Please, it's important you add those unit test) |
| **yourComponent.md**          | Used by styleguide to generate the example of your component. Fill this file with a complete example of the usage of your component.                                                                        |
| **yourComponent.js**          | Rhe React component itself, should contain all the logic of your component.                                                                                                                                 |
| **index.js**                  | File responsible for exporting your component – you probably don't need to change anything here.                                                                                                            |

After your component has been created and all supporting files along with it.
After writing the unit test, your full react component and you have added the markdown example.
We are ready to test everything, so we go to the [next step](#how-to-test-components)

#### How to test components

Nice, so your new component is ready for testing :+1:, that is great! It's time to check if everything works as expected.

_If you want to **locally test a component from within your project**. See [How to locally test blueprint library in your project](#how-to-locally-test-blueprint-components-in-your-project) Otherwise, read on to test your built component in blueprint._

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

#### How to build sassdoc

Execute command `yarn build:sassdoc`

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

#### How to locally test blueprint components in your project

##### You can test using your _local_ blueprint branch...

1. In blueprint, make sure you're on the branch that includes the updates you're wanting to test in your local project.
2. Run `yarn` in case you need to update your install.
3. Test blueprint is loading properly by building the styleguide locally with `yarn start:styleguide`.
4. If having errors, you might need to switch your node version. See [Troubleshooting](#troubleshooting).
5. If everything is looking good in blueprint, you're ready! Run `yarn link` to set it up for linking with your local project.
6. Now time to build it. Run `yarn build:lib`
7. Now time for you to switch to your local project where you're wanting to link blueprint. Let's say it's the website. Open up a new tab in your terminal and go to your local `website` folder. Again, make sure you're on the branch that you want to test blueprint with.
8. Run `yarn link "aime-blueprint"` to link to your local blueprint build.
9. Now run `yarn dev` or whatever command builds your local project. That's it :clap: Now you should be seeing your local blueprint components within your project!

##### Or you can test using a _remote_ blueprint branch...

1. Same as steps 1-3 above
2. Now that you're happy with everything on your local branch, you need to run `yarn build:lib` to build your blueprint library
3. Then you need to commit and push all your blueprint lib files to your remote branch
4. Now switch to your local project you want to link with blueprint. Let's say it's the website. Open up a new tab in your terminal and go to your local `website` folder. Again, make sure you're on the branch that you want to test blueprint with.
5. Run `yarn add git://github.com/aimementoring/blueprint.git#feature/title-improvements --save` but swap out `feature/title-improvements` with the name of the branch you're wanting to test in your project.
6. Now run `yarn dev` or whatever command builds your local project. That's it :clap: Now you should be seeing your local blueprint components within your project!

_NB: Blueprint will be linked until you run…`yarn unlink` in your `blueprint` terminal **as well as** `yarn unlink “aime-blueprint”` in your local project (`website` or `portal`)_

##### Having issues? Try one of the [Troubleshooting](#troubleshooting) tips below.

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

### Troubleshooting

#### Maybe you need to switch node versions

1. Run `nvm list` to see what node version your local blueprint is currently using. Right now, we're using `v12+`.
2. If you don't have a version of `v12`, you will need to install it. To do this run `nvm install [version number]`.
3. Now you can switch to the right version by `nvm use [version number]`
4. Run `yarn` again to install what you need with the new node switch. The end!

#### Maybe someone has updated the .env variables.

1. Checkout `.env.example` and copy in any new variables you might need in `.env`

#### Maybe you have something corrupt in your node_modules folder and you want to start fresh.

1. Delete your local `node_modules` folder (on the project you might be testing with too).
2. Empty your local trashcan
3. Start fresh by installing `yarn` again.
