<!-- The SFC structure -->

<!-- Using template syntax with the .vue extension arguably improves development experience 
  |  we get improved syntax highlighting and the ability to build web components,
  |  using web components increases re-usability, testability and reliability by decreasing 
  |  the markup to a less cumbersome and more manageable size, companies may want to a
  |  library of dumb components to allow the prototyping or building of new pages
  |  to sell new products or even test new features far quicker than without -->

<template>
  <div id="app">
    <Profiler />
  </div>
</template>

<!-- The Script tag is where you can handle logic, import components,
 |   store data, create computed properties, use lifecycle hooks,
 |   name the component, import vuex state and actions, declare prop requirements,
 |   create watch functions...   -->
<script>
import Display from "./components/Display.vue";
import Profiler from "./components/Profiler.vue";

export default {
  name: "app",
  components: {
    Profiler,
    Display
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add the "scoped" attribute to limit CSS to this component only, 
 |   this also adds data atributes to the html which can leak through to
 |   child components. This is what "modules" avoids, it also allows you
 |   to access classes from '$style' object whilst using dynamic class style bindings
 |   i.e :class="$style.button", modules also improves readabability or html in the browser-->
<style modules>
body {
  background-color: #eee;
  display: grid;
  grid-template-rows: auto;
  align-items: center;
}

body,
html {
  margin: 0 auto;
  height: 100%;
}

#app {
  width: 50%;
}
</style>
