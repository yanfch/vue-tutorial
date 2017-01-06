// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)
Vue.use(VueResource)

// 一个路由 一 location 一个component
const routes = [{
  path: '/', // 路由路径
  component: Home
}, {
  path: '/home',
  component: Home
}, {
  path: '/time-entries',
  component: TimeEntries,
  children: [{
    path: 'log-time',
    component: LogTime
  }]
}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
