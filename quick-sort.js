function quickSort(array) {
  if (array.length <= 1) {
    return array
  }

  let pivot = array[Math.floor(array.length / 2)]
  let left = []
  let right = []

  for (let i = 0; i < array.length; i++) {
    if (i === Math.floor(array.length / 2)) continue

    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  const sortedLeft = quickSort(left)
  const sortedRight = quickSort(right)
  const sorted = [...sortedLeft, pivot, ...sortedRight]

  return sorted
}

const unsortedArray = [5, 1, 7, 9, 4, 6, 8, 3, 2]
const sorted = quickSort(unsortedArray)
console.log(sorted)