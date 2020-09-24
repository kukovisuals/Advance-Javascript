/*

This is the object that the function is a property of 
*/

// added to javascript to prevent getting the window object
function b(){
	'use strict'
	console.log(this)
}

///*
const obj = {  
	name: 'freddy',
	sing() {
		return 'hi master ' + this.name
	},
	singAgain(){
		return console.log( this.sing() + '!') 
	}
}

// obj.singAgain()
//*/

function importantPerson(){
	console.log(this.name)
}

const name = 'Freddy'

const obj2 = {
	name: 'casy',
	importantPerson: importantPerson
}
const obj3 = {
	name: 'maria',
	importantPerson: importantPerson
}

//======= Lexical Scope  =============\\

const obj4 = {
	name: 'Freddy Lord',
	sing(){
		console.log(this);
		const apple = () => console.log(this)
		const apple2 = function(){
			console.log(this)
		}
		apple()
		apple2()
	}
}

// obj4.sing()
// obj1.importantPerson()
//======= this more =============\\

const character = {
  name: 'Simon',
  getCharacter: function() {
    return this.name;
  }
};
const x = character.getCharacter;

const y = x.bind(character)
 
//How Would you fix this?
// console.log('?', y()); //this should return 'Simon' bud doesn'


const array = [1,2,3];
 
function getMaxNumber(arr){
  return arr[2]
}
 
// getMaxNumber(array) // should return 3

const mult = (a,b) => a * b

const mult2 = mult.bind(this, 2)
// console.log(mult2(4))
const mult10 = mult.bind(this,10)
// console.log(mult10(4))


// var b = {
// 	name: 'kiki',
// 	say() { console.log(this) }
// }

// var c = {
// 	name: 'karen',
// 	say() { return function(){console.log(this)} }
// }

// var d = {
// 	name: 'lorena',
// 	say() {return () =>  console.log(this) }
// }


const character2 = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character2.getCharacter;

const m2 = giveMeTheCharacterNOW.bind(character2)
//How Would you fix this?
// console.log('?', m2()); //this should return 'Simon' bud doesn't


const bebe = Object.is(NaN, NaN)
// console.log(bebe)

var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = user1 == user2;
alert(eq); // gives false














