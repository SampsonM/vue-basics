<!-- The SFC structure -->

<!-- The template syntax useing the .vue extension allows for improved development experience 
  |* we have improved syntax highlighting and the ability to build web components,
  |* using web components increases re-usability, testability and reliability by decreasing 
  |* code size to a less cumbersome adn more manageable size.<template>
  |* We can create encapsulated functionality or "dumb" presentational components that require far less maintenance -->

<template>
  <div id="app">

    <Skills msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<!-- The Script tag is where you can handle logic, import components,
 |*  store data, create computed properties, use lifecycle hooks,
 |*  name the component, import vuex state and actions, declare prop requirements,
 |*  create watch functions,   -->
<script>
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    Skills
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
 |*  this also adds data atributes to html and these can leak through to
 |*  child components in rare cases
 |*  this is what "modules" avoids, it also allows you
 |*  to access classes from $style object using dynacic class bindings
 |*  i.e :class="$style.button" modules improves readabability on html in the browser-->
<style modules>
body {
  background-color: #EEE;
  display: grid;
  grid-template-rows: auto;
  align-items: center;
}

nody, html {
  margin: 0 auto;
  height: 100%
}

#app {
  width: 50%;
}
</style>
