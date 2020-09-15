// finally will always be called even if an error occurs

const url = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
	'https://jsonplaceholder.typicode.com/todos'
]

// ex 1`
Promise.all(url.map(url => {
	return fetch(url).then(resp => resp.json())
}))
	.then(results => {
		console.log(results[0])
		console.log(results[1])
		console.log(results[2])
		console.log(results[3])
	})
	.catch((err) => console.log('error', err))
	.finally(() => console.log('extra', data))	


// ex 2 
// for wait of

const getData2 = async function(){
	const arrayOfPromises = url.map(url => fetch(url));

	for await (let request of arrayOfPromises){
		const data = await request.json();
		console.log(data)
	}
}