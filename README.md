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
  <img src="https://img.shields.io/coveralls/github/aimementoring/blueprint.svg">
</a>

[![https://nodei.co/npm/aime-blueprint.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/aime-blueprint.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/aime-blueprint)

## Blueprint

The main idea of this project is to define some standards for all AIME platforms. Here you'll find design definitions and React components which are used across all the platforms.

## Table of Contents

1. [Installation](#installation)
2. [Components](#components)
3. Design UI
4. How to's
5. How to deploy

### Installation

Run the following command:
`yarn add aime-blueprint` or `npm i aime-blueprint --save`.

Now import the component/components in the file you will use it:
`import { Button, Input } from 'aime-blueprint`;

Now you are ready to use them :)!

### Components

- Button
- Checkbox
- Input

### Deploy

1. Add your updated files you want to commit with `git add /file1 /file2 ...`.
2. Run commit command to save los changes on git `git commit -m "COMMENTS OF THE CHANGE"` adding a comment of what have you updated, changed or fixed.
3. Push your changes to your branch `git push origin BRANCH_NAME`.
4. Create a PR to master.
5. After PR is approved, run `npm version PATCH.MAJOR.MINOR` replacing PATCH, MAJOR and MINOR by your publish version according to previous version and your type of change.
6. Run `npm publish`.
