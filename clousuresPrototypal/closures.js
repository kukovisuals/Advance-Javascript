
function a(){
	let granpa = 'granpa'
	return function b(){
		let father = 'father'
		return function c(){
			let son = 'son'
			return `${granpa} > ${father} > ${son}`
		}
	}
}

// a()()()

const boo = string => name => name2 => 
	console.log(`${string} ${name} ${name2} `)

// boo('hi')('freddy')('castano')
// wait 5 years

// ====== closures and memory ========== \\

// memory efficient and encapsulation
function heavyDuty(index){
	const bigArray = new Array(7000).fill('Fretz Castano')
	console.log('What ever! ')
	return bigArray
}

heavyDuty(500)
heavyDuty(500)
heavyDuty(500)
const getHeavyDuty = heavyDuty2()
getHeavyDuty(500)
getHeavyDuty(500)
getHeavyDuty(500)

function heavyDuty2(index){
	const bigArray = new Array(7000).fill('Fretz Castano')
	console.log('some text')
	return function (index){
		bigArray[index]
	}
}


// ======== closure and encapsulation ========== \\




