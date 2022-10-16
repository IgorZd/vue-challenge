import {createApp} from 'vue';
import App from './App.vue';
import personCard from './components/PersonCard';

const app = createApp(App);
app.component('PersonCard', personCard);
app.component('PersonCard', personCard);
app.mount('#app');
