# p-map-lite [![Build Status](https://github.com/rocktimsaikia/p-map-lite/workflows/CI/badge.svg?branch=main)](https://github.com/rocktimsaikia/p-map-lite/actions?query=branch%3Amain+workflow%3ACI)

> A lightweight (`~180 bytes`) p-map version for daily uses.

This module is the lite version of similar packages like this (ex: [p-iteration](https://github.com/toniov/p-iteration), [p-map](https://github.com/sindresorhus/p-map)). It removes all the unused options and aims to be as simple as possible. It is meant to be used in daily development, small applications.

## Highlights
- **Lightweight** (`~180 bytes`). Zero dependencies :tada:
- **Simple and easy** to use for daily promise uses
- **Portable**. Works pretty much everywhere.
- Test case added

## Installation

```bash
npm install p-map-lite
```
Or, with yarn:
```sh
yarn add p-map-lite
```

## Usage

```js
import pMap from 'p-map-lite';

const postIds = [1,2,3];

const mapper = async id => {
	const res = await fetch(`/api/posts/${id}`);
    return res.json();
};

const result = await pMap(postIds, mapper);

console.log(result);
//=> [{id: 1,...}, {id: 2,...}, {id: 3,...}]
```

## API

### pMap(input, mapper)

Returns a `Promise` that is fulfilled when all of the input's promises have resolved, or if the input iterable contains no promises.

#### input

Type: `Iterable<Promise | unknown>`<br>
Iterable to be iterated over in the `mapper` function.

#### mapper(element, index)
Type: Function

Expected to return a Promise or value.

## License

MIT 2021 © [Rocktim Saikia](https://rocktimcodes.site)
