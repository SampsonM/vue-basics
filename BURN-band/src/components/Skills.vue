<template>
  <div class="hello">
    <div class="holder">


    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skill: '',
      skills: [
        { "skill" : "Vue.js" },
        { "skill" : "FE dev" }
      ],
    }
  },
  methods: {
    addSkill() {
      this.skills.push({ skill: this.skill })
      this.skill = '';
    }
  }
}
</script>

<style modules>

</style>
