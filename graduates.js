function graduates (students) {
    // Code disini
    var kosong = {}
    var newGraduates = {}
    var newG = []
    var studFoxes = []
    var studWolves = []
    var studTigers = []
    var group = []
    var temp = []
    if(students != 0){
      for(i = 0; i < students.length; i++){
        if(students[i].score < 75){
          students.splice(i,1)
        } if(students[i].class === 'foxes'){
          studFoxes.push(students[i])
        } if(students[i].class === 'wolves'){
          studWolves.push(students[i])
        } if(students[i].class === 'tigers'){
          studTigers.push(students[i])
        }
      }
      group.push(studFoxes)
      group.push(studWolves)
      group.push(studTigers)
      for(j = 0; j < group.length; j++){
        if(group[j] != 0){
          temp.push(group[j])
        }
      }
      for(var k in temp){
        for(var l in temp[k]){
        var love =  temp[k][l].class
       newGraduates[love] = []

      }
    }
    for(var key in newGraduates){
      for(let m = 0; m < students.length; m++){
        var studentClass = students[m].class
      if(studentClass === key){
        newGraduates[key].push(students[m])

      }
      }
    } 
    for(var key in newGraduates){
      for(l = 0; l < newGraduates[key].length;l++){
        delete newGraduates[key][l].class
      }
    }
           console.log(newGraduates)
  }
   else{
        return kosong
  
    }
}
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}