

let n = 999999999999999999999999

let result = ''
for (let i = 1; i <= n ; i ++) {
  result += '\n'
  
  for(let j = 1; j <= i ; j++ ){
    result += '*'
  }
  
  // result += '*'
  // console.log(result)

}

console.log(result)

