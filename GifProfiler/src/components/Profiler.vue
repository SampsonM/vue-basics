<template>
	<div class="profiler">
		<Button  />
		<SearchField @save="saveSearchFieldValue" />
	</div>
</template>
<script>
import Button from "./Button.vue";
import SearchField from "./SearchField.vue";

export default {
  components: {
    Button,
    SearchField
  },
  data() {
    return {
      searchFieldValue: ""
    };
  },
  methods: {
    saveSearchFieldValue(value) {
      console.log(value);
      this.searchFieldValue = value;
    }
  }
};
</script>
<style modules>
</style>
