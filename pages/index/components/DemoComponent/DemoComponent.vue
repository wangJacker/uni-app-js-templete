<template>
	<view>
		<text>{{title}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "1456456446"
			}
		},
		created() {
			console.log(this.$u)
		}
	}
</script>
<style>
</style>
