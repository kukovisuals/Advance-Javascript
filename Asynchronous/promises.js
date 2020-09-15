/* 
	promise is an object that may produce a single value in the future
 	either a resolve value, or rejected
 	fulfill, rejected, pending   
	
 */

const promise = new Promise((resolve, reject) => {
	if (true) {
 	resolve('stuff worked');
	} else {
 	reject('Error, it broke');
	}
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'pooki!!')
})

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 5000, 'is it me youre looking for')
})

// ex 2
Promise.all([promise, promise2, promise3, promise4])
	.then(result => console.log(result))
 // promise.then(result => console.log(result))


// ex 1 
 promise
 	.then(result => result + '!')
 	.then(result2 => console.log(result2))
 	.catch(() => console.log('Error!'))

