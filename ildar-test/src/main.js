import './assets/main.css'

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as vTableComponents from "vuetify/labs/VDataTable";

import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const vuetify = createVuetify({
    components: {
        ...components,
        ...vTableComponents
    },
    directives,
});




// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})




createApp(App).use(vuetify).use(store).mount('#app')
