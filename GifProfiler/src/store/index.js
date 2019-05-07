import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

export default new Vuex.Store({
    // State is the same as the data property in you SFC components
    // the state is where you hold all of your application data that
    // you wish to be made available across your site
    state: {
        count: 0
    },

    // Mutations are committed and triggering a mutation is the only way
    // to change state. We can pass a payload to update the state to whatever
    // you wish, and the 'commit' function can be accessed via 'store.commit'
    //
    // example commit mutation - store.commit('increment')
    mutations: {
        increment(state, payload) {
            state.count++
        }
    },

    // Although similar to mutations, Actions are what 'commit' mutations
    // and are where you generally carry out asynchronous operations.
    // Payloads can be passed through to the commit here and altered
    // to create custom logic specific to your app
    //
    // example dispatch of action - store.dispatch('increment', payload)
    actions: {
        increment({ commit }, payload) {
            commit('increment', payload)
        }
    },

    // In Getters we can create essentially app wide computed properties,
    // they are cached and only re-evaluated when a dependency changes.
    // They receive state and getters as Arguments.
    //
    // example of accessing getter - store.getters.countNumber
    getters: {
        countNumber(state, getters) {
            return state.count
        },

        // You can also return a function which is useful for allowing
        // the user to query the store
        //
        // example - store.getters.getToDoById(2)
        getToDoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    }
})

// All of the above can be accessed in SFC's by using the vuex helpers
// 
// Use the mapState and mapGetters helpers to create computed properties
//
// computed: {
//      ...mapState({
//          'count'
//      }),
//      ...mapGetters({
//          'countNumber',
//          'getTodoById'
//      })
// }
//
// Use the mapActions and mapMutations helpers to create methods in you SFC
//
// methods: {
//      ...mapActions({
//          'increment'
//      }),
//      ...mapMutations({
//          'increment'
//      })
//}
