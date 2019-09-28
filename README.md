![Node CI Badge](https://github.com/jost-kuenzel/alfred-time-between/workflows/Node%20CI/badge.svg)

# time-between Alfred workflow

An Alfred workflow to calculate hours elapsed between one or more timeframes.

![Alfred Logo](src/assets/icon-240.png)

_(thank you https://pixabay.com/vectors/time-time-of-clock-time-indicating-1606153/)_

## Requirements

A current Node.js version and Yarn are required to build and run this Alfred workflow.

## Usage

Enter `tb` and a series of timeframes e.g. `09:00-12:00 13:30-17:00`

or

Copy text that includes a bunch of timeframes into your clipboard and enter `tbc`.

## Build the workflow

```
yarn install
yarn build
yarn package
```

## Install the workflow

Open the created `.alfredworkflow` file in Finder. Alfred should import it right away.
