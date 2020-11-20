/**
 * @Author: WangYe
 * @Date:  2020-11-18 15:53:52
 */

// 根节点的actions

// demo
const addToCart = (context, product) => {
	if (product.inventory > 0) {
		const payload = {
			id: product.id,
		}
		context.commit(types.ADD_TO_CART, payload)
	}
}

export default {
	addToCart,
}
