function cariModus(arr) {
    // you can only write your code here!
    var modus = 0
    var count = 0
    var result = []
    for(i = 0; i < arr.length ; i++){
        for(j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                mode = arr[j]
                count++
                result.push(mode)
                // console.log(mode + 'ini count ' + count)
                // console.log(result)
            }
      }
    }
          if(count === 0 || count > 5 ){
          return -1
        }
    return result[0]
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1