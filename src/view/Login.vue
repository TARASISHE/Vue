
<template>
  <div class="wrapper">
  <form class="card auth-card"  @submit.prevent="sumbitHandler">
    <div class="card-content">
      <span class="card-title">Login</span>
      <div class="input-field">
        <label for="email">Email</label>
        <input
            id="email"
            type="text"
            class="validate"
        >
        <small 
          class="helper-text invalid"

        >Поле Email не должно быть пустым</small>
        <small 
          class="helper-text invalid"
        >Введите корретный Email</small>
      </div>
      <div class="input-field">
        <label for="password">Пароль</label>
        <input
            id="password"
            type="password"
            class="validate"
        >
        <small 
          class="helper-text invalid"
        >
          Введите пароль
        </small>
        <small 
          class="helper-text invalid"
         
        >
          Пароль должен быть {{}} символов. Сейчас он {{}}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn-login"
            type="submit"
        >
          Войти
        </button>
      </div>

      <p class="register-pad">
        Нет аккаунта?
       <span class="register-link"><router-link to="/register">Зарегистрироваться</router-link></span>
      </p>
    </div>
  </form>
</div>
</template>


<script>



export default {
 name:"Login",
 methods:{
  sumbitHandler(){
    this.$router.push('/home')
  }
 }
}
</script>

<style scoped>
.wrapper{
  width: 100vw;
  height: 100vh;
  background-color: rgb(96, 93, 93);
}

input{
  width: 400px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.25);
}
input:focus{
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.card{
  background-color: #FFF;
  width: 40%;
  height: 65%;
  position: fixed;
  top: 10%;
  left: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}
.card-title{
  font-size: 20px;
  font-weight: 600;
}
.input-field{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}


.helper-text{
  padding: 10px 0px;
}
.card-action{
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.btn-login{
width: 200px;
height: 30px;
border-radius: 15px;
background-color:rgb(0, 178, 124) ;
border: none;
margin: 10px 0px 0px 0px;
color: #FFF;
font-size: 16px;
transition: all 0.2s;
}
.btn-login:hover{
  border: 2px solid rgb(0, 178, 124) ;
  background-color: #FFF;
  color:rgb(0, 178, 124) ;
}

.register-pad{
  padding: 20px 0px;
}
.register-link{
  color:rgb(0, 178, 124);
}
</style>