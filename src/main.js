import Vue from 'vue'
import App from './App.vue'
import addtasks from './components/addtasks.vue'
import tasks from './components/tasks.vue'
import myheader from './components/myheader.vue'
import myfooter from './components/myfooter.vue'
import VueFire from 'vuefire'
import BootstrapVue from 'bootstrap-vue'
import VueRx from 'vue-rx'
import { Observable, Subject, ReplaySubject, from, of, range, pipe } from 'rxjs';
import { map, filter, switchMap, startWith, scan, pluck } from 'rxjs/operators';

export const eventBus = new Vue();

Vue.use(BootstrapVue);
Vue.use(VueFire);
Vue.use(VueRx, {
  Observable, Subject, ReplaySubject, from, of, range, map, filter, switchMap, startWith, scan, pipe, pluck
})

Vue.component('addtasks', addtasks);
Vue.component('tasks', tasks)
Vue.component('myheader', myheader)
Vue.component('myfooter', myfooter)

new Vue({
  el: '#app',
  render: h => h(App)
})
