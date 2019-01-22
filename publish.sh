#!/bin/bash

VERSION=$1

yarn deploy
git add .
git commit -m "Publish new version of blueprint library $VERSION"
git push origin master
npm version $VERSION
npm publish
