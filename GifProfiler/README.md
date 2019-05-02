# SET-UP

### All the documentation you will need is [here](https://vuejs.org/v2/guide/), this project won't describe every little step but give an introduction to into pieces of what Vue is and provide the documentation where neccassary

* Use the [Vue-cli](https://cli.vuejs.org/) to create a vue app, choose the default setup

* Delete the default component file of HelloWorld.vue, remove the import of the component from the app.vue file on line 8, and remove line 12 from the components object, the components object is where you add the imported component to use in the html and for vue to build the VirtualDOM

* You will find html like syntax on line 4 which uses the HelloWorld file name as a html tag, this is placing the HelloWorld component HTML at this point as if it were normal HTML, remove this as we now no longer have access to it

* Remove the Img tag from line 3

#
### You are now ready to begin creating!

* Your task is to create giphy profile, you will have one input field and search button to search your favourite gifs using the giphy api and then they will be saved for viewing later!

* How you design your page is up to you, if you're no a css wizard you can use one of [these](https://www.cssscript.com/categories/frameworks/) css frameworks to do the leg work for you... 8 bit NES css theme?!

* If youre wondering how you find the gifs well [giphy](https://developers.giphy.com/docs/) has a great api for dev use, create an app and get a public auth key and try it out in the [giphy explorer](https://developers.giphy.com/explorer/), if you've used this [before...](https://media.giphy.com/media/OMK7LRBedcnhm/giphy.gif)

* You can create a simple Giphy query as follows:- https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=RockyBalboatymcboatface&limit=1&offset=0&rating=R&lang=en

* If you are new to making requests with JS check out [axios](https://www.npmjs.com/package/axios), install this and make a request to a URL to return some gifs


#
## Approach

This is where you have to start creating your app, using the last basic example of a simple vue app, create an app that uses seperate Vue SFC's to create minimal html and readable methods that live in the right place.

- First create an [SFC](https://vuejs.org/v2/guide/single-file-components.html) for a search box, an SFC is a vue component/file that has:
 	* a template tag to house the html
	* a script tag that holds the data, methods and other functionality
	* a style tag that holds 'scoped' css for your component.

```javascript
<template>
	// insert html here and acces data using template syntax
	<p>{{ aString }}</p>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			aString: 'add some string here or any primitive data type'
		}
	},
	methods: {
		sendRequest() {
			axios.get('someURL')
		}
	}
}
</script>

<style>
</style>
```

* When you have created one SFC you've created them all, *almost*, and the syntax/ structure is no longer a problem, neither is how the components come together, so the basis of a simple SFC structured app is understood?

* *More questions will come but for now its good enough*

* So all we are left with is creating methods to handle user input and figuring out how we move and store data in our app

#
## Passing data between components

* When we create a component, such as a search bar, we want to be able to pass the data around to its parent or child
 	* *With large scale applications you would use Vuex state-management that stores all your data and data handling methods in one place*

* For small apps we only use the data object, this holds the data relevant to itself and its child components

* The data in the data object is accessible to the HTML, so we can use the *v-bind:aPropName or :aPropName* syntax to pass any data to child components as [PROPS](https://vuejs.org/v2/guide/components-props.html)

*Example uses :gifs as a prop name to pass anArrayOfGifs to the ImgCarousel*

```javascript
<template>
	<ImgCarousel :gifs="anArrayOfGifs" />
</template>

<script>
import ImgCarousel from './ImgCarousel.vue'

export default {
	components: {
		ImgCarousel
	},
	data() {
		return {
			anArrayOfGifs: [
				{gif Objects Go Here...},
				{gif Objects Go Here...}
			]
		}
	}
}
</script>
```

* So we have seen how you pass data down as props, but how do we pass data back up to a components parent?

* To pass data up we need to use a click/ keyPress handler to [EMIT](https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event) an event to its parent

* This takes a little more code as an example:

*SearchField.vue*  
*Example shows @keyup, on the input html tag, being passed a callback function that emits a value to the 'save' binding function seen in the AppComponent.vue SearchField tag*

```javascript
<template>
	<div>
		<input type="text"
			@keyup="(event) => $emit('save', event.target.value)" />
	</div>
</template>

<script>

export default {
	data() {
		return {}
	}
}
</script>
```

*AppComponent.Vue*  
*Example shows the 'save' event binding assigning 'saveSearchFieldValue' to itself*

```javascript
<template>
	<SearchField @save="saveSearchFieldValue" />
</template>

<script>
import SearchField from './SearchField.vue'

export default {
	components: {
		SearchField
	},
	data() {
		return {
			searchFieldValue: ''
		}
	},
	methods: {
		saveSearchFieldValue(value) {
			this.searchFieldValue = value
		}
	}
}
</script>
```

In the example above we see an input field calling a function on key press that exists in its parent component, this function then saves the value passed in the parent class.

And this is how we pass data up the component tree

#
