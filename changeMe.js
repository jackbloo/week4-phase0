function changeMe(arr) {
  // you can only write your code here!
  var nama = {}
  var thisYear = 2019
  for(i = 0; i < arr.length; i++){
    console.log((i+1)+'. ' + arr[i][0] + ' ' + arr[i][1] + ':')
   nama['firstName'] = arr[i][0]
   nama['lastName'] = arr[i][1]
   nama['gender'] = arr[i][2]
   nama['age'] = thisYear - arr[i][3]
   if(arr[i][3] === undefined){
     nama['age'] = 'Invalid Birth Year'
   }
   console.log(nama)
  }

}



// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
