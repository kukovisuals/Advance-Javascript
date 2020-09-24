// we are creating a system for a program to let users sign in

 //EXAMPLE 1
// tell the function which data to use
function letUserLogin(user){
	console.log( giveAccessTo(user))
	// later we'll tell you what data to use
	return giveAccessTo(user)
}
// letUserLogin('eva')


const giveAccessTo = name => 'Granted access to ' + name

function authentication(verify){
	let arr = []
	for(let i = 0; i<verify; i++){
		arr.push(i)
	}
	console.log(giveAccessTo(person.name))
	return giveAccessTo(person.name)
}

// EXAMPLE 2 
// Higher order function bc it acceps a function as a parameter
function sign(person){
	console.log('La la la la my name is ' + person.name)
	return 'La la la la my name is ' + person.name
}
function letPerson(person, fn){
	if (person.level === 'admin') {
	return fn(person)
	} else if (person.level === 'user'){
	return	fn(person)
	}
	/*
	EXAMPLE 2.1
	console.log(giveAccessTo(person.name))
	return giveAccessTo(person.name)
	*/
}
// letPerson({level:'user', name:'sally'},sign)


// EXAMPLE 3
const multiplyBy = num => num2 => num * num2

const multiplyByTwo = multiplyBy(2)
const multiplyByTen = multiplyBy(10)

multiplyByTwo(2) // returns 8
multiplyByTwo(44) // returns 440




