export const binarySearch = (data: number[], search: number): number | null => {
  let database = data
  let index = Math.floor((data.length - 1) / 2)
  console.log(database.splice(0, database.length))
  // while (database.length !== 1) {
  //   const pos = (database.length - 1) / 2
  //   let middle = data[pos]
  //   if (middle === search) {
  //     return index
  //   }
  //   if (search < middle) {
  //     index = Math.floor(index / 2)
  //     database.splice(pos)
  //   }
  //   if (search > middle) {
  //     index = index + Math.floor(index / 2)
  //     database.splice(0, database.length / 2)
  //   }
  // }
  return null
}
