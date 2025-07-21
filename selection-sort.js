function selectionSort(array){
  for(let i = 0; i < array.length - 1; i++){
    let lowIndex = i

    for(let j = i + 1; j < array.length; j++){
      
      console.log(`Comparando ${array[j]} com ${array[lowIndex]}`)

      if(array[j] < array[lowIndex]){
        lowIndex = j
      }

      console.log(`Low index: ${array[lowIndex]} na posição ${lowIndex}`)
      
      if(lowIndex !== i){
        console.log(`Trocando ${array[i]} com ${array[lowIndex]}`)
        console.log('--------------------------')
        
        let temp = array[i]
        array[i] = array[lowIndex]
        array[lowIndex] = temp
      }
    }
  }
  return array
}

console.log(selectionSort([5,3,8,4,9,2,6,1]))
