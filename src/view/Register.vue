
<template>
    <div class="wrapper">
    <div class="container">
    <form class="card">
     <h1 class="card-title">Creat Account</h1>
     <p><input type="text"  required class="card-input" id="email" placeholder="Email" v-model="email" /></p>
     <template if="includeDog()">
      <small class="helper-text invalid">
       
      </small>
     </template>
    
     <p><input type="password" required class="card-input" placeholder="Password" v-model="password" /></p>
     <small class="helper-text invalid">
  
      </small>
     <div class="start">
     <p><button class="btn-register" @click.prevent="register">Register</button></p>
    </div>
    <p class="margin-top">Alredy have accout? <span><router-link class="loginlink" to="/Login">Log-In</router-link> </span></p>
    </form>
  </div>
  </div>


  </template>
  
  
<script>

import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth'
  export default {
   name:"Register",
   data(){
     return{
      email:'',
      password:''
     }
   },
   methods:{
    register(){
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
    .then((data)=>{
      
      alert("SUCCESS");
      this.$router.push("/home")
    }) 
    .catch((error) => {
     alert(error)
    })
    },
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
  }

  .card{
    background-color: rgba(255, 255, 255, 0.8);
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px 0px 16px 0px;
  }

  .card-title{
    padding: 20px 0px;
    font-size: 24px;
    font-weight: 600;
  }

  .card-input{
    padding: 0px 10px;
    margin: 20px 0px;
    width: 400px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;

  }
  .card-input:focus{
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.45);
    background-color: rgba(255, 255, 255, 0.75);
  }
  .start{
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  }
  .btn-register {
    width: 200px;
    height: 30px;
    border-radius: 15px;
    background-color:rgb(0, 178, 124) ;
    border: none;
    margin: 20px 0px 0px 0px;
    color: #FFF;
    font-size: 16px;
    transition: all 0.2s;
    }
    
   .btn-register:hover{
    border: 2px solid rgb(0, 178, 124) ;
    background-color: #FFF;
    color:rgb(0, 178, 124) ;
    }

    .loginlink{
      color:rgb(0, 178, 124) ;
    }

    .margin-top{
      padding: 10px 0px;
      margin: 30px 0px;
    }
  </style>

  <!--
  <template>
    <main class="login">
      <section class="forms">
  
        <form class="register" @submit.prevent="register">
          <h2>Register</h2>
          <input 
            type="email" 
            placeholder="Email address"
            v-model="register_form.email" />
          <input 
            type="password" 
            placeholder="Password" 
            v-model="register_form.password" />
          <input 
            type="submit" 
            value="Register" />
            <p>Alredy have an account? <span><router-link class="link_login" to="/login">Login</router-link></span></p>
        </form>  
      </section>
    </main>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  export default {
    setup () {
      const register_form = ref({});
      const store = useStore();
      const register = () => {
        store.dispatch('register', register_form.value);
      }
      return {
        register_form,
        register
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
  form.register input:not([type="submit"]) {
    color: #FFF;
    border-bottom: 2px solid #FFF;
  }
  form.register input[type="submit"] {
    background-color: #FFF;
    color: rgb(245, 66, 101);
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
  }
  .link_login{
    font-weight: 700;
    color: blue;
  }
  </style>
  -->