<template>
	<div>
		<div v-for="(gif, i) in gifs" :key="i">
			<img :src="gif.images.original.url" alt="random-gif">
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
	name: 'display',
	computed: {
		...mapState([
			'gifs'
		])
	}
};
</script>
<style modules>
</style>
