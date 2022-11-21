import {createRouter, createWebHashHistory } from 'vue-router';
import Calculator from './view/Calculator.vue';
import Home from './view/Home.vue';
import TodoList from './view/TodoList.vue'




export default createRouter({
    history: createWebHashHistory(),
    
    routes:[
      {  path: "/home", component: Home},
      {  path: "/calculator", component: Calculator},
      {  path: "/todo-list", component: TodoList },
    ]
})