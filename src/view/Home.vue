<template>
    <div class="center">
    <Item></Item>
    </div>
</template>

<script>
import HeaderApp from '../components/HeaderApp.vue';
import Item from '../components/item.vue';

export default {
    components: {
    HeaderApp,
    Item,
  }
}
</script>


<style>
.center{
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>