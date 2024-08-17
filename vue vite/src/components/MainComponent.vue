<template>
	<Teleport to="body">
		<div class="teleport">teleport</div>
	</Teleport>

	<!-- <ChildComponent
		class="main2"
		:class="refClass"
		v-bind="{ style: 'font-size: 20px; white-space: nowrap' }"
	></ChildComponent> -->
</template>

<script lang="ts" setup>
import ChildComponent from "./ChildComponent.vue";
let refClass = "ref2";
</script>

<style lang="scss" scoped></style>
