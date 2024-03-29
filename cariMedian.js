function cariMedian(arr) {
    // you can only write your code here!
    var len = arr.length
    var mid = Math.floor(len/2)
   // console.log('ini mid ' + mid)
    if(len % 2 !== 0){
        return arr[mid]
    } else {
      return (arr[mid]+arr[mid-1])/2
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5