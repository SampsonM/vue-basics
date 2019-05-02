<template>
	<input type="text" 
		@keyup="(event) => $emit('save', event.target.value)">
</template>
<script>
export default {
	
}
</script>
<style modules>

</style>
