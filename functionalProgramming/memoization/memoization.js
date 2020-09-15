// memoization ~~~ Caching
// like back back that you take your school
// chaching hold items that you need
// is a way to remember a solution for a problem to not calculate again 
function addTo80(n){
	console.log('long time')
	return n + 80
}

let cache = {};
function memoizationAddTo80(n){
	if (n in cache) {
		return cache[n];
	} else {
		console.log('long time')
		cache[n] = n + 80;
		return cache[n]
	}
}

// console.log('1',memoizationAddTo80(5) )
// console.log('2',memoizationAddTo80(5) )

// with CLOUSURE 

function memoizationAddTo80(){
	let cache = {};
	return function(n){
		if (n in cache) {
			return cache[n];
		} else {
			console.log('long time')
			cache[n] = n + 80;
			return cache[n]
		}
	}
}

const memoize = memoizationAddTo80()

console.log('1',memoize(5) )
console.log('2',memoize(5) )
