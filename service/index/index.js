/**
 * @Author: WangYe
 * @Date:  2020-11-19 11:43:57
 */

export default function creteIndexApi(vm) {
	return {
		getSearch: (params = {}) => vm.$u.get("/ebapi/store_api/hot_search", {
			id: 2
		}),

		// 此处使用了传入的params参数，一切自定义即可
		getInfo: (params = {}) => vm.$u.post('/ebapi/public_api/index', params)
	}
}
