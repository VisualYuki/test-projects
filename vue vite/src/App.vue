<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			data: undefined as undefined | { num: number },
		};
	},
	mounted() {
		this.data.num = 1;
		// this.data?.num не удобно.
	},
});
</script>

<template>
	<p>{{ data.num }}</p>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
