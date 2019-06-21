function checkAB(num) {
    // you can only write your code here!
    //Split first
  var numArr = num.split('')
  var numArr2 = []
  for(i = 0; i < numArr.length; i++){
    if(numArr[i] !== ' '){
      numArr2.push(numArr[i])
      //console.log(numArr2)
    }
  }  
  for(j = 0; j < numArr2.length; j++){
    if(numArr2[j] === 'a'){
      for(var k = j; k <= (j+3) ; k++){
        if(numArr2[k] === 'b'){
          return true
        }
      }
    }
  }
        return false
  }
  
      
  
      
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false