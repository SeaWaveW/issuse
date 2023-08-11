<template>
	<div class="login">
		<button @click="login">首页</button>
	</div>
</template>
<script setup lang="ts" name="login">
const $router = useRouter()
const login = () => {
	$router.push('/home')
}
</script>
<style lang="scss" scoped>
.login {
	background: pink;
}
</style>
