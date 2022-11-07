# React Native Theming
[![React Version](https://img.shields.io/badge/react-v18.0.0-informational)](https://reactjs.org/docs/getting-started.html)
[![React Native Version](https://img.shields.io/badge/react_native-v0.69.6-success)](https://reactnative.dev)
[![Expo Version](https://img.shields.io/badge/expo-v46.0.16-purple)](https://www.expo.io)

<br>

<div align="center">
<img src="https://github.com/dedSyn4ps3/react-native-theming/raw/main/screenshots/banner.png">
</div> 

<br>

> This repo is meant to hold the code files for the Medium article [Hail to the Theme](https://medium.com/@erutherford_nullreturn).

<br>

## About

This is a demo application that utilizes the Expo framework to create a React Native-based mobile app capable of switching between custom *light* and *dark* color palettes depending on the host device settings. 

**The application makes use primarily of customized components offered by the awesome React Native Paper and React Navigation frameworks**

<br>

You can create your own custom *Material UI* color palettes by going to `react-native-paper`'s theme generator [page](https://callstack.github.io/react-native-paper/theming.html).

<br>

<div align="center">
<img src="https://github.com/dedSyn4ps3/react-native-theming/raw/main/screenshots/theme-generator.png">
</div> 

## Live Development

To run in live development mode, run `npx expo start` in the project root directory. This will start an interactive command line utility allowing you choose which device to run your app on:

- Test on a physical device using the `Expo Go` mobile app (scan the QR for easy setup)
- Run on an Android emulator (using Android Studio)
- Run on iOS emulator device (using XCode)

<br>

## Building

To build a packaged application ready for app store distribution, follow the detailed documentation provided by [Expo]('https://www.expo.io') to use the `eas build` command line utility.

<br>

## Licensing™️

- Copyright 2022 Ed Rutherford (github.com/dedsyn4ps3)
- Licensed under MIT