<template>
  <HeaderApp></HeaderApp>
<router-view></router-view>
</template>

<script>
import Home from "./view/Home.vue"
import HeaderApp from "./components/HeaderApp.vue"

export default{
  components: {
    Home,
    HeaderApp
  }
}
</script>





