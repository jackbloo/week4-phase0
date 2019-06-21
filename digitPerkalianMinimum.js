function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var perkalian = []
    for(i = 0; i <= angka ; i++){
      for(j = 0 ; j <= angka; j++){
        if(i*j === angka){
          var digitPerkalian = i.toString() + j.toString()
          perkalian.push(digitPerkalian)
          // console.log(perkalian)
        }
      }
    }
    var perkalianPertama = perkalian[0].length
    for(k = 0; k < perkalian.length; k++){
      if(perkalianPertama > perkalian[k].length){
        perkalianPertama = perkalian[k].length
      }
    }
    return perkalianPertama
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2