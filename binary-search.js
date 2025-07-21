function binarySearch(array, target){
  let lowIndex = 0
  let highIndex = array.length - 1

  while(lowIndex <= highIndex){
    let middle = Math.floor((lowIndex + highIndex) / 2)

    if(target === array[middle]){
      return middle
    }

    if(target < array[middle]){
      highIndex = middle - 1
    }

    if(target > array[middle]){
      lowIndex = middle + 1
    }
  }

  return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 1))
