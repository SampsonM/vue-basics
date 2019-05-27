<template>
	<div class="profiler">
		<Button @click="searchGif"  />
		<SearchField @save="saveSearchFieldValue" />
    <Display />
	</div>
</template>
<script>
import Button from "./Button.vue"
import SearchField from "./SearchField.vue"
import Display from './Display.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Display,
    Button,
    SearchField
  },
  data() {
    return {
      searchFieldValue: ""
    }
  },
  methods: {
    saveSearchFieldValue(value) {
      console.log(value);
      this.searchFieldValue = value;
    },
    searchGif() {
      console.log("Searched for gif")
    }
  }
};
</script>
<style modules>
</style>
