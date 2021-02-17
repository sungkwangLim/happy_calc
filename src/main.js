import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router).mount('#app');

export default{
    setup(){
        if (sessionStorage.redirect) {
            const redirect = sessionStorage.redirect
            delete sessionStorage.redirect
            this.$router.push(redirect);
          }
    }
}