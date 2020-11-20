/**
 * @Author: WangYe
 * @Date:  2020-11-19 11:43:02
 */
// 首页
import indexService from '@/service/index/index.js'

// demo
import demoService from '@/service/demo/index.js'

const install = (Vue, vm) => {
	const apiIndex = indexService(vm);
	const apiDemo = demoService(vm);

	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下 //因为全局注入方便统一管理名称开始为api+页面名称
	vm.$u.api = {
		apiIndex,
		apiDemo
	};
}

export default {
	install
}
