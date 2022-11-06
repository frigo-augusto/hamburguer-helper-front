import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Test from './views/Example.vue';
import GerenciadorDePedidos from './views/GerenciadorDePedidos.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/example', component: Test},
    { path: '/GerenciadorDePedidos', component: GerenciadorDePedidos}
  ]
});

new Vue({
  router,
  template: `
    <div>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');
