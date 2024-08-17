<template>
	<div
		class="test"
		:class="refClass"
		:style="`color: red`"
		style="font-weight: bold"
	>
		child component
	</div>
</template>

<script lang="ts" setup>
let refClass = "ref";
</script>

<style lang="scss" scoped></style>
