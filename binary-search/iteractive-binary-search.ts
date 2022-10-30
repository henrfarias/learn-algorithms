export const iterativeBinarySearch = (data: number[], search: number): number | null => {
  let low = 0
  let high = data.length - 1
  while(low <= high) {
    const middle = Math.floor((low + high) / 2)
    const guessing = data[middle]
    if (guessing === search) {
      return middle
    }
    if (guessing > search) high = middle - 1
    if (guessing < search) low = middle + 1
  } 
  return null
}
