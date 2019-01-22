#!/bin/bash

yarn deploy
git add .
git commit -m "Publish new version of blueprint library"
git push origin master
npm version
npm publish
