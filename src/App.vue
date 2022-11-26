<template>
    <HeaderApp></HeaderApp>
    <router-view></router-view>
 
</template>

<script>
import LoginVue from './view/Login.vue';
import HeaderApp from './components/HeaderApp.vue';
import RegisterVue from './view/Register.vue';
export default{
 components:{
  LoginVue,
  HeaderApp,
  RegisterVue,
 }
}
</script>





