This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

## Table of Contents

* [Getting Stared](#getting-started)
* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm run ios](#npm-run-ios)
  * [npm run android](#npm-run-android)
  * [npm test](#npm-test)
* [Writing and Running Tests](#writing-and-running-tests)

## Getting Start

Setting up emulators or real devices to run the project is as easy as following the steps for Building Projects with Native Code [here](https://facebook.github.io/react-native/docs/getting-started.html)


## Available Scripts

After installing dependencies via Yarn or NPM and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app bundler in development mode.

In another terminal you should run to initialize like bloew
```
# export RNPLATFORM=ios
# export RNPLATFORM=android
./node_modules/.bin/react-native run-$PLATFORM
```

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).

This project is also set up to use [detox](https://github.com/wix/detox) with [mocha](https://mochajs.org/).
After installing detox globally and setting up as describe in its repository, run tests with:
```bash
./node_modules/.bin/detox test
```
There is a sample test to verifies Home page loads just fine.
Create test files with `.spec` extension to have the files lodead by mocha.
