function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    var arrShop = []
  // Stock of products
  var stockSepatu = listBarang[0][2] 
  var stockBaju = listBarang[1][2] 
  var stockSweater = listBarang[2][2]
  var pembeliSepatu = []
  var pembeliBaju = []
  var pembeliSweater = []
  var kosong = []

  if(shoppers != 0){
 for(i = 0; i < shoppers.length; i++){
    if(stockSepatu >= shoppers[i].amount && shoppers[i].product === 'Sepatu Stacattu'){
       pembeliSepatu.push(shoppers[i].name)
      stockSepatu -= shoppers[i].amount
    } else if(stockBaju > shoppers[i].amount && shoppers[i].product === 'Baju Zoro'){
      pembeliBaju.push(shoppers[i].name)
      stockBaju -= shoppers[i].amount
    } else if(stockSweater >= shoppers[i].amount && shoppers[i].product === 'Sweater Uniklooh'){
       pembeliSweater.push(shoppers[i].name)
      stockSweater -= shoppers[i].amount
  }
  }
  var reminder;
  var shopper;
  for(k = 0; k < listBarang.length; k++){
  if(listBarang[k][0] === 'Sepatu Stacattu'){
    reminder = stockSepatu
    shopper = pembeliSepatu
    profit = (listBarang[k][2] - stockSepatu) * listBarang[k][1]
  }
  else if(listBarang[k][0] === 'Baju Zoro'){
    profit = (listBarang[k][2] - stockBaju) * listBarang[k][1]
    reminder = stockBaju
    shopper = pembeliBaju
  }
  else if(listBarang[k][0] === 'Sweater Uniklooh'){
    profit = (listBarang[k][2] - stockSweater) * listBarang[k][1]
    reminder = stockSweater
    shopper = pembeliSweater
  }
  var newShop = {}
  newShop['product'] = listBarang[k][0]
  newShop['shopper'] = shopper
  newShop['leftOver'] = reminder
  newShop['totalProfit'] = profit
  arrShop.push(newShop)
  }
  return arrShop
  }
 
  return kosong
 
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
