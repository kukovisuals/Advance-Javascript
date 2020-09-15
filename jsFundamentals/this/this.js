/*
const obj = {  
	name: 'freddy',
	sing() {
		return 'hi master ' + this.name
	},
	singAgain(){
		return console.log( this.sing() + '!') 
	}
}

obj.singAgain()
*/

function importantPerson(){
	console.log(this.name)
}

const name = 'Freddy'

const obj = {
	name: 'casy',
	importantPerson: importantPerson
}
const obj1 = {
	name: 'maria',
	importantPerson: importantPerson
}

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






























