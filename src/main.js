import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);


export default {
    created(){
        if (sessionStorage.redirect) {
            const redirect = sessionStorage.redirect
            delete sessionStorage.redirect
            this.$router.push(redirect);
          }
    }
}
app.use(router).mount('#app');