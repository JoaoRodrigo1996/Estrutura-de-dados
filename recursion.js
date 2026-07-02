function fibonacci(value){
  if ( value < 0 ) {
    return 'value invalid'
  }

  if(value == 0 ||value == 1){
    return value
  }

  return fibonacci(value - 1) + fibonacci(value- 2)
}

//result = fibonacci(7)
//console.log(result)

function factorial(value){
  if (value == 1){
    return 1
  }

  return value * (factorial(value - 1))
}

factorialResult = factorial(10)
console.log(factorialResult)
