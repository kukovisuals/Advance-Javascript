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
		const updatedCart = user.cart.concat([item])
		return Object.assign({}, user, {cart: updatedCart})
	}

	function applyTaxToItems(user){
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
		return Object.assign({}, user, {purchases: user.cart})
	}

	function emptyCart(user){
		return Object.assign({}, user, {cart: []})
	}