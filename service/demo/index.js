/**
 * @Author: WangYe
 * @Date:  2020-11-19 13:48:19
 */
export default function creteDemoApi(vm) {
	return {
		getSearch: (params = {}) => vm.$u.get("/ebapi/store_api/hot_search", params),

		// 此处使用了传入的params参数，一切自定义即可
		getInfo: (params = {}) => vm.$u.post('/ebapi/public_api/index', params)
	}
}
