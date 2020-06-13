import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Mgr from './services/SecurityService';

Vue.use(VueRouter);
Vue.config.productionTip = false
let mgr = new Mgr();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
      mgr.getRole().then(
        sucess => {
          if (to.meta.role == sucess){
            next();
          }else {
            next('/accessdenied');
          }
        },
        err => {
          console.log(err);
        }
      );    
  } else {
    next();
  }
});