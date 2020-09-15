// no side effects 
// input --> output

const array = [1,2,3]

function removeLast(arr){
	const newArr = [].concat(arr);
	newArr.pop()
	return newArr
}

function multiplayItem(arr){
	return arr.map( a => a * 2)
}

const array2 = removeLast(array);
const array3 = multiplayItem(array)

// console.log(array, array2, array3)

//referencial transparency 

function a(num1, num2){
	return num1 + num2
}

function b(num){
	return num * 2
}

b(a(1,3))