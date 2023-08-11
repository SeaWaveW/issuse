<template>
	<div class="home">
		首页
		<el-button
			type="primary"
			@click="goLogin">
			去登录
		</el-button>
		<SwTable :data="[{ name: 'A' }, { name: 'B' }]"></SwTable>
	</div>
</template>
<script setup lang="ts" name="home">
import SwTable from '@/components/Table/Table.vue'
const $router = useRouter()

const goLogin = () => {
	$router.push('/login')
}
</script>
<style lang="scss" scoped>
.home {
	background: pink;
}
</style>
