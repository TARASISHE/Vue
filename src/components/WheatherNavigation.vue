<template>
  <div class="container">
      <nav class="navigantion">
        <p class="text">The Local Weather</p>
        <button class="plus">+</button>
      </nav>
  </div>    
</template>


<script>
export default{
   
}
</script>

<style>
.container{
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.navigantion{
  margin-top:20px ;
  width: 50%;
  height: 30px;
  border-radius:15px ;
  display: flex;
  align-items: center;
  justify-content: space-between;
   background-color: #0098a0fa; 
}
.text{
  padding: 0px 10px;
}
.plus{
  margin: 0px 10px;
  font-size: 20px;
  font-weight: 800;
  background-color: #0098a0fa; 
  border: none;
  color: #fff;
}
</style>