import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

vue.use(Vuex)

// I want to make a GET request for gifs        = Dispatch an Action
// I want to save result of request to state    = Commit a Mutation
// I want to access gifs saved in state         = Getters return data from state

export default new Vuex.Store({
    // State is the same as the data property in SFC's or vue instances,
    // and is where you hold your application data
    state: {
        gifs: []
    },

    // Actions are Dispatched and is where you should carry out asynchronous operations.
    // you should Commit Mutations here to save/ alter state
    //
    // example dispatch of action - store.dispatch('increment', payload)
    actions: {
        async GetGifs({ commit }, payload) {
            const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=6l2Rn2SRC7COXlmhJ3muH74FmAkIzrgA&tag=&rating=G')
            // 6l2Rn2SRC7COXlmhJ3muH74FmAkIzrgA
            commit('UPDATE_GIFS', response.data.data.images.original.url)
        }
    },

    // Mutations are committed and is the only way to change state.
    // We can pass a payload to update the state,
    //
    // example commit mutation - store.commit('increment')
    mutations: {
        UPDATE_GIFS(state, payload) {
            state.gifs.push(payload)
        }
    },

    // Getters create app wide computed properties,
    // which are cached and re-evaluated if a dependency changes.
    //
    // example of accessing getter - store.getters.countNumber
    getters: {
        countNumber(state) {
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
//      ...mapState([
//          'count'
//      ]),
//      ...mapGetters([
//          'countNumber',
//          'getTodoById'
//      ])
// }
//
// Use the mapActions and mapMutations helpers to create methods in you SFC
//
// methods: {
//      ...mapActions([
//          'increment'
//      ]),
//      ...mapMutations([
//          'increment'
//      ])
//}
