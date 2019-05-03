<template>
	<div class="profiler">
		<Button @click="searchGif"  />
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
    },
    searchGif() {
      console.log("Searched for gif");
    }
  }
};
</script>
<style modules>
</style>
