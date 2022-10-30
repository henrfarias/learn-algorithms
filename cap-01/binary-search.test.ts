import { binarySearch } from './binary-search'

describe('Binary search', () => {
  it('should return the index about number 30', () => {
    const database = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    const search = 30
    const result = binarySearch(database, search)
    expect(result).toBe(3)
  })

  it('should return the index about number 70', () => {
    const database = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    const search = 70
    const result = binarySearch(database, search)
    expect(result).toBe(6)
  })
})
