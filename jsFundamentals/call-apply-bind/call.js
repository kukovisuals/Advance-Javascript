/*
function a(){
	console.log('hi')
}

//short hand of a()
a.apply()

*/

const wizard = {
	name: 'Melin',
	health: 50,
	heal(num1, num2){
		return this.health += num1 + num2
	}
	/*
	heal() {
		return this.health = 100
	}
	*/
}

const archer = {
	name: 'Robin Hood',
	health: 30
}

// console.log('1', archer)
const healthArcher = wizard.heal.bind(archer, 50, 30)
healthArcher()
// wizard.heal.apply(archer, [50, 30])
// wizard.heal.call(archer)
// console.log('2', archer)


// excersice

const array = [1,2,3];
 
function getMaxNumber(arr){
  //code here  
  console.log(Math.max.apply(null,arr))
  // console.log(Math.max(...arr))
}
 
getMaxNumber(array) // should return 3



