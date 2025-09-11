function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }

  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
  let resultArray = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex])
      leftIndex++
    } else {
      resultArray.push(right[rightIndex])
      rightIndex++
    }
  }

  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const unsortedArray = [8, 4, 9, 2, 7, 6, 1, 3, 0]
const sortedArray = mergeSort(unsortedArray)

console.log(sortedArray)
