// Async await

/*
async function fetchUsers(){

	const resp = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await resp.json();
	console.log(data)
}
*/

const url = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(url.map(url => {
	return fetch(url).then(resp => resp.json())
})).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
}).catch(() => console.log('error'))

const getData = async function(){
	try {
		const [ users, posts, albums ] = await Promise.all(url.map(url =>
			fetch(url).then(resp => resp.json())
		))
		console.log(usera)
		console.log(posts)
		console.log(albums)
	} catch (err) {
		console.log('error!', err)
	}
}