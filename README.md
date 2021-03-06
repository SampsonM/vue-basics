#
# Vue

### What is Vue?

- Understandable
- Fast

It allows developers to quickly prototype user interfaces, but also build scalable apps that are predicted to grow. It can be adopted incrementally or used to build SPA's that can make use of vue tools such as Vuex state management and the Vue-router.

*This document assumes you have some understanding of JS, however, I will link certain Mozilla and Vue docs where approproate*

#

### How it works?

There are tons of articles outlining how Vue and its internals work, but for me they don't serve as a quick refernece point to refresh my memory, they are however great for learning more in depth on vue as a starting point so I've linked them anyway.

[Demystifying Vue Internals](https://medium.com/js-imaginea/the-vue-js-internals-7b76f76813e3) - good for learning about compilation and reactivity

[Understanding the virtualDOM and rendering](https://medium.com/@koheimikami/understanding-rendering-process-with-virtual-dom-in-vue-js-a6e602811782) - good for rendering and how the virtualDOM works in Vue

[A Vue handboook](https://medium.freecodecamp.org/the-vue-handbook-a-thorough-introduction-to-vue-js-1e86835d8446) - A great handbook with broad learnings on Vue

[How to build vue components like a pro](https://blog.bitsrc.io/how-to-build-vue-components-like-a-pro-fd89fd4d524d) - Good to learn how to build class components with slots and props, and create functional templates

These are just a few and are all great but they take a lot of reading, so I'm going to hugely simplify this with some simple code examples and build a quick and simple guide that can be used as reference.


#### how does it work then...

1. A Vue instance is created *, a JS object which holds the methods, data and components,* and targets an element in the HTML to attach the instance to

*Example 1 used to inject vue into a simple website*
```javascript
// index.js
const app = new Vue({
	el: '#app'
})
```

*Example 2 used when bundling your app with Vue-cli (webpack under the hood)*
```javascript
// Main.js
import App from './fileThatContainsYourAppComponent.vue'

new Vue({
	// The hyperscript function h() creates JS virtual DOM objects from SFC templates,
	// h essentially means createElement**
	render: h => h(App)
}).$mount('#app')
```

2. Now, a JS Object copy of the DOM has been created called a 'VirtualDOM', so if you change any data Vue compares the New VirtualDOM and old virtual DOM to check for changes, it can then re-render only the required components in the DOM and bundles smaller changes into single renders to improve performance.

** for more on the h method see [here](https://css-tricks.com/what-does-the-h-stand-for-in-vues-render-method/)

#
### What is the VirtualDOM?

When creating the vue instance it is passed SFC templates of HTML that it [transforms](https://vuejs.org/v2/guide/render-function.html#The-Virtual-DOM) into JS objects of [DOM Nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node)

When this is done alot of the wasteful static and repeated information is stripped out and saved for when it is needed later, this reduces the time vue spends comparing the relevant data.

The virtual DOM exists as comparing JS nodes is far less expensive and time consuming than reading directly from the DOM.

#
### What is data?

In your Vue components or instance you will have the option to add a data object, this is literally the data/ state you want to have access to in your HTML or vue methods.

*Used to inject vue into a simple website*
```javascript
// index.js
const app = new Vue({
	el: '#app',
	data: {
		myLongTitle: 'A really long title that would make the html look a bit annoying to read, also this is a terrible example'
	}
})
```
```html
<!-- index.html -->
<h3>{{ myLongtitle }}</h3>
```

*Used when bundling your app with Vue-cli (webpack under the hood)*
```javascript
// App.vue which would be imported into your Main.js
<template>
	<p>{{ myLongTitle }}</p>
</template>
<script>
export default {
	data() {
		return {
			myLongTitle: 'A really long title that would make the html look a bit annoying to read, also this is a terrible example'
		}
	}
}
</script>

```

#

## How to use it?

Vue can be implemented incrementally or from the off to build SPA's or  MPA's

