
<template>
  <div class="wrapper">
    <div class="container">
  <form class="card auth-card"  @submit.prevent="sumbitHandler">
    <span class="card-title">Login</span>
    <div class="card-content">
      <div class="input-field">
        <label for="email">Email</label>
        <input id="email"  type="text" class="validate">
      </div>
      <div class="input-field">
        <label for="password">Пароль</label>
        <input id="password" type="password" class="validate">
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn-login" type="submit"> Войти </button>
      </div>
    </div>
    <p class="register-pad"> Don`t have account?
       <span class="register-link"><router-link to="/register">Зарегистрироваться</router-link></span>
      </p>
  </form>
</div>
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .container{
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
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
  background-color: rgba(255, 255, 255, 0.8);
    width: 40%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px 0px 16px 0px;
}
.card-title{
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
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
margin: 30px 0px 0px 0px;
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
  margin:30px 0px;
}
.register-link{
  color:rgb(0, 178, 124);
}
</style>

<!--
<template>
	<main class="login">
		<section class="forms">
			<form class="login" @submit.prevent="login">
				<h2>Login</h2>
				<input 
					type="email" 
					placeholder="Email address"
					v-model="login_form.email" />
				<input 
					type="password" 
					placeholder="Password" 
					v-model="login_form.password" />
				<input 
					type="submit" 
					value="Login" />
          <p>Don't have an account? <span><router-link class="link-register" to="/register">Register</router-link></span></p>
			</form>
		</section>
	</main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
	setup () {
		const login_form = ref({});
		const store = useStore();
		const login = () => {
			store.dispatch('login', login_form.value);
		}
		return {
			login_form,
			login,
			
		}
	}
}
</script>

<style>
.forms {
	display: flex;
	min-height: 100vh;
}
form {
	flex: 1 1 0%;
	padding: 8rem 1rem 1rem;
}
form.register {
	color: #FFF;
	background-color: rgb(245, 66, 101);
	background-image: linear-gradient(
		to bottom right,
		rgb(245, 66, 101) 0%,
		rgb(189, 28, 60) 100%
	);
}
h2 {
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 2rem;
}
input {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}
input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
}
input:focus:not([type="submit"]) {
	opacity: 1;
}
input::placeholder {
	color: inherit;
}

form.login input:not([type="submit"]) {
	color: #2c3e50;
	border-bottom: 2px solid #2c3e50;
}
form.login input[type="submit"] {
	background-color: rgb(245, 66, 101);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}

.link-register{
  font-weight: 700;
  color: blue;
}
</style>
-->