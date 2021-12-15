import { createApp } from 'vue'
import {createStore} from 'vuex';
import App from './App.vue'
import router from './router'

const store = createStore({
    state() {
        return {
            counter: 11,
            counter2: 34,
            counter3: 14,
        }
    }

})

createApp(App).use(store).use(router).mount('#app')
