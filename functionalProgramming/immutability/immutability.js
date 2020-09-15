// immutability

const obj = {name: 'Andrei'}

function clone(obj){
	console.log({...obj})
	return {...obj}
}
function updateName(obj){
	const obj2 = clone(obj)
	obj2.name = 'Nana'
	console.log(obj2)
	return obj2
}
const updatedObj = updateName(obj)
clone(obj, updatedObj)