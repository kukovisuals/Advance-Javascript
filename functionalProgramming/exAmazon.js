// amazon shopping
const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: []
}
const item = {
		name: 'dildo',
		price: 500
	} 

const amazonHistory = []
const compose = (f,g) => (...arg) => f(g(...arg));

purchaseItem(
	emptyCart,
	buyItem,
	applyTaxToItems,
	addItemToCart
)(user, item)

function purchaseItem(...fns) {
	return fns.reduce(compose)
}

function addItemToCart(user, item){
	amazonHistory.push(user)
	const updatedCart = user.cart.concat([item])
	return Object.assign({}, user, {cart: updatedCart})
}

function applyTaxToItems(user){
	amazonHistory.push(user)
	const {cart} = user;
	const taxtRate = 1.3;
	const updatedCart = cart.map( item => {
		return {
			name: item.name,
			price: item.price * taxtRate
		}
	})
	return Object.assign({}, user, {cart: updatedCart})
}

function buyItem(user){
	amazonHistory.push(user)
	return Object.assign({}, user, {purchases: user.cart})
}

function emptyCart(user){
	amazonHistory.push(user)
	return Object.assign({}, user, {cart: []})
}

amazonHistory






