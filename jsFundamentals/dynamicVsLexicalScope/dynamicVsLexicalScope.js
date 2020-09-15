/*
const a = function(){
	console.log('a', this)
	const b = function () {
		console.log('b', this)
		const c = {
			hi: function(){
				console.log('c', this)
			}
		}
		c.hi()
	}
	b()
}

a()
*/

/*
const obj = {
	name: 'Freddy',
	sing: function(){
		console.log('a',this)
		var anotherFunc = function(){
			console.log('b',this)
		}
		return anotherFunc
	}
}

*/
/*
const obj = {
	name: 'Freddy',
	sing: function(){
		console.log('a',this)
		var anotherFunc = () =>{
			console.log('b',this)
		}
		return anotherFunc
	}
}
*/

const obj = {
	name: 'Freddy',
	sing: function(){
		console.log('a',this)
		var anotherFunc = function(){
			console.log('b',this)
		}
		return anotherFunc.bind(this)
	}
}

obj.sing()



