<template>
	<!--  -->
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text>{{vuex_version}}</text>
			<text>{{vuex_user.name}}</text>
		</view>
		<demo-component></demo-component>
		<!-- <text>{{vxIndex.a}}</text> -->
		<u-button type="primary" @click="handleChange">修改vuex_token</u-button>
		<u-button type="primary" @click="handleClick">修改vuex_token</u-button>
	</view>
</template>

<script>
	import DemoComponent from './components/DemoComponent/DemoComponent.vue'
	export default {
		data() {
			return {
				title: 'Hello1111'
			}
		},
		components: {
			DemoComponent
		},
		onLoad() {

		},
		created() {},
		methods: {
			handleClick() {
				this.$u.vuex("vuex_version", '454565455')
				this.$u.vuex("vuex_user.name", '二狗子', true)
			},
			async handleChange() {
				await new Promise((resolve, reject) => {
					const timer = setTimeout(() => {
						// this.$u.vuex("vuex_version", '7897887979')
						// this.$u.vx("vxIndex.a", '好酒')
						resolve();
						clearTimeout(timer)
					}, 3000)
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
