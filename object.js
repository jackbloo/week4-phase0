// cara pertama
var adil = {
    //key, value
    firstName: 'Adil',
    lastName: 'Pratama',
    age: 22,
    status: false
}

// cara kedua
var iqbal = {}
iqbal.firstName = 'Iqbal'
iqbal.lastName = 'Putro'
iqbal.age = 22
iqbal.status = true

// Cara ketiga
var edwin = {}
edwin['firstName'] = 'Edwin'



var person = {
    name: 'rama',
    hobbies: ['tidur', 'makan', 'mandi'],
    address: {
        city: 'Jakarta',
        zipcode: 12340
    }
}
person.address.kecamatan = 'pondok Indah' // {city: 'Jakarta', Zipcode: 12340}
// CARA AKSES OBJECT LITERAL
// array = [1, 2, 3 ] => array[0]
/*


*/
console.log(persons.hobbies)
console.log(person['hobbies'])

var person = {
    name: 'Josh',
    age: 22,
    address: {
        province: 'Sumatera Utara',
        city: 'Medan'
    },
    hobbies: ['tidur', 'makan', 'cari duit']
}

function getInfo(columns) {
for(var i = 0; i < columns.length; i++){
    var nameColumn = columns[i]
    console.log(person[nameColumn])
}
}

getInfo('name','hobbies')


for(var i = 0; i < person.hobbies.length; i++){
    console.log(person)
}

/*
STRUCTURED DATA
- ARRAY/LIST = sequence yang serupa
- OBJECT = sequence tidak serupa
- ARRAY OF OBJECT --> DATABASE
[{},{},{}]

*/

var people = [{
    firstName: 'Danang',
    lastName: 'Bahari',
    address: 'slipi',
    age: 23
}, {
    firstName: 'franz',
    lastName:'sesa',
address: 'tangerang',
age: 23
},
{
    firstName: 'Tomi',
    lastName: 'suharto',
address: 'salemba',
age: 34}]

for(var i = 0;i < people.length; i++){
    console.log(people[i])
}
console.log(people)
newPeople = []
for(var i = 0;i < people.length; i++){
    var newPerson = {
        fullName: people[i].firstName + ' ' + people[i].lastName,
        age: people[i].age,
        address: people[i].address

    }
    newPeople.push(newPerson)
}
console.log(newPerson)


var input = [
    ['firstName', 'lastName', 'age'].
    ['Adi', 'Suharto', 23],
    ['tommy', 'suharto', 24],
    ['danang', 'suharto', 25]
]

var output = [] // [{}]
for(var i = 1; i < input.length; i++){
    var newPerson = {
        /* Yang pertama
        [input[0][0]]: input[i][0],
        [input[0][1]] : input[i][1],
        [input[0][2]] : input[i][2]
        */
    }
       /* Yang kedua
    newPerson[input[0][0]] = input[i][0]
    newPerson[input[0][1]] = input[i][1]
    newPerson[input[0][2]] = input[i][2]
    */

    for(var j = 0; j < input[i].length; j++){
        // Yang ketiga
        newPerson[input[0][j]] = input[i][j]
    }
 



    output.push(newPerson)
}
console.log(output)

var person = {
    firstName: 'Tomi',
    lastName: 'suharto',
    age: 34,
address: 'Jakarta',
hobbies: ['makan', 'tidur']
}

for(var key in person){
    console.log(person[key])
    if(typeof person[key] !== 'strings'){
        delete person[key]
    }
}

/*
Cara 1 buat ambil string doang
bisa pake delete
*/

var arr = [1, 2, 3]
var keys = object.key(person)
console.log(keys, 'ini pakai obj keys')
for(var number of arr){
    console.log(number)
}
//Bisa buat looping object
for(var number in arr){
    console.log(number)
}

// ['cat', 'dog', 'cat', 'cat', 'dog']
// {'cat': 1, 'dog': 1}
// Object.keys()

var hacktiv8 = {
    address: 'sultan iskandar muda',
    name: 'hacktiv8',
    ceo: {
        name: 'Tomy',
    },
    programs: [{
        title: ' fullstack javascript',
        students: [{
            name: 'frans'
        }],
        instructors:{
            name: 'budi',
        }
    },{
        title: 'into to python',
        students:[{
            name: 'frans',
        }],
    instructor: {
        name: 'adi',
    }    }, {
        title: 'intro to programming',
        students: [{
            name: 'frans'
        }],
        instructor: {
            name: 'budi'
        }
    }]
}

for(var i = 0; i < hacktiv8.programs.length;i++){
    var program = hacktiv8.programs[i]
    console.log(hacktiv8.name + ' - ' . program.title)
    console.log('instructor: ', program.instructor.name)
    console.log('List student:')
    for(var student of program.student){
        console.log(student)
    }
    console.log('='.repeat(20))
}
/*
HACKTIV8 - Fullstack javascript
instructor: budi,
students: frans, adi
*/

var person = {
    address: {
        city: 'jakarta'
    },
    hobbies: []
}

console.log(person.address.length)
console.log(person.hobbies.length)
for(var key in person){
    if(person[key].length == false){
        console.log('ini array', key)
    }
}