function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var kosong = []
    var harga = 0
    var hasil = []
    var berangkat;
    if(arrPenumpang != 0){
  
    for(i = 0;i < arrPenumpang.length; i++){
      for(var j in rute){
        if(rute[j] === arrPenumpang[i][1]){
            berangkat = j
        } else if(rute[j] === arrPenumpang[i][2]){
            pulang = j
        } 
        }
      harga = (pulang - berangkat) * 2000
      var newPenumpang = {}
      newPenumpang['penumpang'] = arrPenumpang[i][0]
      newPenumpang['naikDari'] = arrPenumpang[i][1]
      newPenumpang['tujuan'] = arrPenumpang[i][2]
      newPenumpang['bayar'] = harga
      hasil.push(newPenumpang)
      
    }
  
  }else{
      return kosong
    }
    return hasil
  }
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]