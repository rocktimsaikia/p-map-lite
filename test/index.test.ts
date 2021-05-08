import pMap from '../src'

const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms || 0))
}

describe('Main', () => {
  it('should return [11, 21]', async(done) => {
    const result = await pMap([10, 20], async(num) => {
      await delay(num * 100)
      return num + 1
    })
    expect(result).toEqual([11, 21])
    done()
  })
})
