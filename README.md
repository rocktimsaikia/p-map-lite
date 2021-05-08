# p-map-lite

> A lightweight (`~180 bytes`) p-map version for daily promise uses.

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/rocktimsaikia/p-map-lite/CI/main?style=flat-square)
![npm](https://img.shields.io/npm/v/p-map-lite?style=flat-square&color=brightgreen)

An opinionated lightweight promise map module. Similar to packages like [p-iteration](https://github.com/toniov/p-iteration), [p-map](https://github.com/sindresorhus/p-map).<br>
Except it removes all the unused options and aims to be as simple as possible.

<br />

### Highlights

- **Lightweight** (`~180 bytes`). Zero dependencies :tada:
- **Simple and easy** to use for daily promise uses.
- **Portable**. Both `esm` and `cjs` support.

<br />

### Setup

Install the package:

```sh
npm install p-map-lite
```

<br />

### Usage

```js
import pMap from 'p-map-lite';

const postIds = [1, 2, 3];

(async () => {
  const output = await pMap(postIds, async () => {
    const res = await fetch(`/api/posts/${id}`);
    return res.json();
  });

  console.log(output);
  //=> [{id: 1,...}, {id: 2,...}, {id: 3,...}]
})();
```

<br />

### API

#### pMap(input, mapper)

Returns a `Promise` that is fulfilled when all of the input's promises have resolved, or if the input iterable contains no promises.

| Parameter | Type                | Description                                                                                    |
| :-------- | :------------------ | :--------------------------------------------------------------------------------------------- |
| `input`   | `Array`             | **Required**. Array to be iterated over in the `mapper` function.                              |
| `mapper`  | `Function/Callback` | **Required**. An callback function to handle the logic just like in the built-in `map` method. |

<br />

### License

[MIT](https://choosealicense.com/licenses/mit/)
