import {  createApp  } from 'vue'
import {regComponents} from './regComponents'
import App    from './App.vue'
import router from './router'
import store  from './store'




const app = createApp(App)
  .use(store)
  .use(router)
  regComponents(app)
app.mount('#app')
