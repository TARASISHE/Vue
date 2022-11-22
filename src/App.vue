<template>
<HeaderApp></HeaderApp>
    <router-view></router-view>
 
</template>

<script>
import LoginVue from './view/Login.vue';
import HeaderApp from './components/HeaderApp.vue';
export default{
 components:{
  LoginVue,
  HeaderApp,
 }
}
</script>





