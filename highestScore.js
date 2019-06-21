function highestScore (students) {
    // Code disini
    var kosong = {}
    var newStudents = {}
    var tampung;
    var kelas = []
    var cFoxes = []
    var cWolves = []
    var cTigers = []
  if(students != 0){
      for(i = 1; i < students.length; i++){
     for(j = 0; j < i; j++){
              if(students[i].score > students[j].score){
                  tampung = students[i]
                  students[i] = students[j]
                  students[j] = tampung
      }
    }
  }
  for(k = 0; k < students.length; k++){
    if(students[k].class === 'foxes'){
      cFoxes.push(students[k])
    } else if(students[k].class === 'wolves'){
      cWolves.push(students[k])
    } else if(students[k].class === 'tigers'){
      cTigers.push(students[k])
    }
    
  }
  kelas.push(cFoxes[0])
  kelas.push(cWolves[0])
  kelas.push(cTigers[0])
  
  var temp=[]
  for(l = 0; l < kelas.length; l++){
    if(kelas[l] != null){
      temp.push(kelas[l])
    }
  }
  
  for(m = 0; m < temp.length; m++){
   newStudents[temp[m].class] = {name: temp[m].name, score: temp[m].score}
  }
   console.log(newStudents)
  }
  else {
  
    return kosong
  }
  //return students
  }
  // TEST CASE
    console.log(highestScore([
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
    //   foxes: { name: 'Dimitri', score: 90 },
    //   wolves: { name: 'Alexei', score: 85 }
    // }
    
    
    console.log(highestScore([
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
    //   foxes: { name: 'Alexander', score: 100 },
    //   wolves: { name: 'Alisa', score: 76 },
    //   tigers: { name: 'Viktor', score: 80 }
    // }
    
    
    console.log(highestScore([])); //{}