function selectionSort(array){
  for(let i = 0; i < array.length - 1; i++){
    let lowIndex = i

    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[lowIndex]){
        lowIndex = j
      }
      
      if(lowIndex !== i){
        let temp = array[i]
        array[i] = array[lowIndex]
        array[lowIndex] = temp
      }
    }
  }
  return array
}

console.log(selectionSort([5,3,8,4,9,2,6,1]))
