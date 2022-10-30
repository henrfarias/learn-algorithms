import { iterativeBinarySearch } from './iteractive-binary-search'

describe('Binary search', () => {
  const database = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  it('should return the index about number 30', () => {
    const search = 30
    const result = iterativeBinarySearch(database, search)
    expect(result).toBe(3)
  })

  it('should return the index about number 70', () => {
    const search = 70
    const result = iterativeBinarySearch(database, search)
    expect(result).toBe(7)
  })

  it('should return null if there is no the number', () => {
    const search = 85
    const result = iterativeBinarySearch(database, search)
    expect(result).toBe(null)
  })
})
