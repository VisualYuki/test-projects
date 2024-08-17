<template>
	<div>
		<MainComponent> </MainComponent>
		<div id="id"></div>
	</div>
</template>

<script lang="ts" setup>
import MainComponent from "./components/MainComponent.vue";
</script>

<style scoped>
span:focus {
	color: red;
}
</style>
