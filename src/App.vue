<template>
   <!-- <div id="nav" v-if="$store.state.user">
    <HeaderApp></HeaderApp>
    </div>--> 
    <HeaderApp></HeaderApp>
    <router-view></router-view>
 
</template>

<script>
import LoginVue from './view/Login.vue';
import HeaderApp from './components/HeaderApp.vue';
import RegisterVue from './view/Register.vue';
// import { useStore } from 'vuex';
// import { onBeforeMount } from 'vue';
//import HomeVue from './view/Home.vue';

export default{
 components:{
  LoginVue,
  HeaderApp,
  RegisterVue,
 // HomeVue,
 },
/* setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }*/
}
</script>





