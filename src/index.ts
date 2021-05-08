type Mapper<Element = any, NewElement = unknown> = (
  element: Element,
  index: number
) => NewElement | Promise<NewElement>

const pMap = async <T, N>(array: Array<T>, mapper: Mapper<T, N>) => {
  const promiseArray = array.map(async(item, index) => {
    const current = await Promise.resolve(item)
    return mapper(current, index)
  })
  return Promise.all(promiseArray)
}

export default pMap
