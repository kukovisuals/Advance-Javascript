const angel = {
	name: 'Freddy',
	weapon: 'lie ditector',
	attack(){
		return 'Attack with ' + angel.weapon
	}
}

// ======== factory functions ========= \\

// function createAngel(name, weapon){
// 	return {
// 		name: name,
// 		weapon: weapon,
// 		attack() {
// 			return 'Attack with ' + weapon
// 		}
// 	}
// }



/*
const angelFunction = {
	attack() {
		// console.log('Attack with ' + this.weapon)
		return 'Attack with ' + this.weapon
	}
}

function createAngel(name, weapon){
	return {
		name,
		weapon
	}
}

const freddy = createAngel('Freddy','lie ditector')
freddy.attack = angelFunction.attack;
console.log(freddy)
const anny 	 = createAngel('Anny','Domestic Goddes')
*/


// ======== Object.create() ========= \\


const angelFunction2 = {
	attack() {
		return 'Attack with ' + this.weapon
	}
}

function createAngel(name, weapon){
	// create a prototype change between two parts of a code
	let newAngel = Object.create(angelFunction2)
	// console.log('1',newAngel.__proto__)
	// attach the name and weapon propery
	newAngel.name = name;
	newAngel.weapon = weapon;
	return newAngel;
	
}

// const freddy = createAngel('Freddy','lie ditector')
// freddy.attack = angelFunction2.attack;
// console.log(freddy)
// const anny 	 = createAngel('Anny','Domestic Goddes')


// ======== Object.create() ========= \\


function Angel1(name, weapon, quality){
	this.name = name;
	this.weapon = weapon;
	this.quality = quality;
}
// adding the attack method to the prototype chain 
Angel1.prototype.attack = function(){
	return 'attack with ' + this.weapon + ' power!'
}
Angel1.prototype.passion = function(){
	return 'my biggest quality is ' + this.quality
}



// ======== ES6 Classes ========= \\

class Angel {
	constructor(name, weapon, quality){
		this.name = name;
		this.weapon = weapon;
		this.quality = quality;
	}

	attack(){
		return 'attack with ' + this.weapon + ' power!';		
	}

	passion(){
		return 'my biggest quality is ' + this.quality;
	}
}

// freddy is an instance of angel 
const freddy = new Angel('Freddy','lie ditector', 'fucking hard');
freddy.quality
console.log(freddy)
const anny 	 = new Angel('Anny','Domestic Goddes')




















