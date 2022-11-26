import {createRouter, createWebHashHistory } from 'vue-router';
import Calculator from './view/Calculator.vue';
import Home from './view/Home.vue';
import TodoList from './view/TodoList.vue'
import WeatherForecast from './view/WeatherForecast.vue'
import Login from './view/Login.vue'
import Register from './view/Register.vue'



export default createRouter({
    history: createWebHashHistory(),
    
    routes:[
      {  path: "/home", component: Home},
      {  path: "/calculator", component: Calculator},
      {  path: "/todo-list", component: TodoList },
      {  path: "/weather-forecast", component:WeatherForecast},
      {  path: "/login", component:Login},
      {  path: "/register", component:Register}
    ]
})