#!/bin/bash

VERSION=$1

yarn deploy
npm version $VERSION
git add .
git commit -m "Publish new version of blueprint library $VERSION"
git push origin master
npm publish
