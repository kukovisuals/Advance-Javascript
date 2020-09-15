// HOF

const hof = () => () => 5;
hof()()
const hof2 = (fn) => fn(5)
hof2(function a(x){ return x}) 



const closure = function(){
	let count = 0;
	return function(){
		count++
		return count
	}
}

const incrementFn = closure();
incrementFn();
incrementFn();