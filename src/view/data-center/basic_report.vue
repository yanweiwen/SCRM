<template>
	<div class="report scrm-page-content">
		<developing tips="程序正在加紧开发，敬请期待。。。" />
	</div>
</template>
<script>
import developing from '@/components/developing/developing.vue'

export default {
	components: {
		developing
	}
}
</script>
<style>
.report {
	height: 100%;
	background-color: #ffffff;
	border-radius: 8px;
	box-shadow: 0 0 20px #ddd;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
