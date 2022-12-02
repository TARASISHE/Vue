import {createRouter, createWebHashHistory } from 'vue-router';
import Calculator from './view/Calculator.vue';
import Home from './view/Home.vue';
import TodoList from './view/TodoList.vue'
import WeatherForecast from './view/WeatherForecast.vue'
import Login from './view/Login.vue'
import Register from './view/Register.vue'
// import { auth } from 'firebase/auth'



export default createRouter({
    history: createWebHashHistory(),
    
    routes:[
      {  path: "/home", 
        name: 'Home',
        component: Home,
        meta: {
          requiresAuth: true
        }
      },
      {  path: "/calculator", 
         name: 'Calculator',
         component: Calculator,
         meta: {
          requiresAuth: true
        }
      },
      {  path: "/todo-list",
         name: 'TodoList',
         component: TodoList ,
         meta: {
          requiresAuth: true
        }
      },
      {  path: "/weather-forecast",
         name: 'WeatherForecast',
         component:WeatherForecast,
         meta: {
          requiresAuth: true
        }
      },
      {  path: "/login", 
         name:"Login",
         component:Login
      },
      {  path: "/register",
         name:"Register",
         component:Register,
      }
    ],

   /* $router:beforeEach((to, from, next) => {
      if (to.path === '/login' && auth.currentUser) {
        next('/')
        return;
      }
    
      if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
        next('/login')
        return;
      }
    
      next();
    }),*/
})
