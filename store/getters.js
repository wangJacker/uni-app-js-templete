/**
 * @Author: WangYe
 * @Date:  2020-11-18 16:08:01
 */

// demo

const cartProducts = (state) => {
	return state.cart.added.map((shape) => {
		const product = state.products.all.find((p) => p.id === shape.id)
		if (product) {
			const cartProduct = {
				title: product.title,
				price: product.price,
				quantity: shape.quantity,
			}
			return cartProduct
		}
	})
}

export default {
	// cartProducts,
}
