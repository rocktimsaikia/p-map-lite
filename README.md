# p-map-lite 

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/rocktimsaikia/p-map-lite/CI/main?style=flat-square) ![npm](https://img.shields.io/npm/v/p-map-lite?style=flat-square&color=brightgreen)

<samp> A lightweight p-map version for daily promise uses.</samp>



<br />

### Features

- Lightweight (`~180 bytes`) - zero dependencies :tada:
- Simple and easy to use for daily promise uses
- Portable - both `esm` and `cjs` support

<br />

### Usage


```bash
npm install p-map-lite
```

```javascript
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

[MIT](./LICENSE) License © 2021 [Rocktim Saikia](https://github.com/rocktimsaikia)
