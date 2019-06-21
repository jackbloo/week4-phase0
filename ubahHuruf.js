function ubahHuruf(kata) {
    // you can only write your code here!
   var result = ''
   var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   for(var i = 0; i < kata.length; i++){
       var lokasiAlpha = alphabet.indexOf(kata[i])
      // console.log(lokasiAlpha)
       var lokasiAlphaBaru = lokasiAlpha + 1
       var kataBaru = alphabet[lokasiAlphaBaru]
      // console.log(kataBaru)
       result += kataBaru
      // console.log(result)
   }
   return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu