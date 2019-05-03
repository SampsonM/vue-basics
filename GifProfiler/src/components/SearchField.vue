<template>

	<div  class="nes-field">
		<label for="name_feild">
			Search Bar:
		</label>
		<input
			type="text"
			id="name_field"
			class="nes-input"
			@keyup="(event) => $emit('save', event.target.value)">
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
