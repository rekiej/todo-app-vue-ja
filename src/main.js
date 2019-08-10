import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';

import Card from './components/Card.vue';
import Cardbl from './components/cardbl.vue';
//import BaseInputText from './components/BaseInputText.vue'
//import TodoListItem from './components/TodoListItem.vue'

Vue.config.productionTip = false;

Vue.component('todo-card', Card);
Vue.component('todo-cardbl', Cardbl);
//Vue.component('BaseInputText.vue', BaseInputText);
//Vue.component('TodoListItem.vue', TodoListItem);


new Vue({
  render: h => h(App),
}).$mount('#app');
