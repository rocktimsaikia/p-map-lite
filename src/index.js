export default async (array, mapper) => {
  const promiseArray = array.map(async (item, index) => {
    const current = await Promise.resolve(item);
    return mapper(current, index);
  });
  return Promise.all(promiseArray);
};
