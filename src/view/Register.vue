
<template>
    <div class="wrapper">
    <form class="card auth-card"  >
     <h1>Creat Account</h1>
     <p><input type="text"  id="email" placeholder="Email" v-model="email" /></p>
     <p><input type="password" placeholder="Password" v-model="password" /></p>
     <p><button @click="register">Sumbit</button></p>
     <ul class="list">
                    <li class="list-item">
                        <router-link to="Home">Home</router-link>
                    </li>
                    <li class="list-item">
                      <router-link to="/calculator">Calculator</router-link>  
                    </li>
                    <li class="list-item">
                        <router-link to="/todo-list">Todo-List</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="/weather-forecast">Weather Forecast</router-link>
                    </li>
                </ul>
    </form>
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
    register  (){
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data)=>{
      alert("SUCCESS");
      this.$router.push("/home")
    }) 
    .catch((error) => {
      alert(error);
    })
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
  button{
    border: 1px solid black;
  }
  input{
    border: 1px solid black;
    margin: 20px 0px;
  }
  input:focus{
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 0.75);

  }
  .card{
    background-color: #FFF;
    width: 40%;
    height: 80%;
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
    padding: 10px 0px;
  }
  .register-link{
    color:rgb(0, 178, 124);
  }

  .flex{
    padding: 10px 0px;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
  }
  .validate{
    width: 400px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
  .agreement{
    font-size: 14px;
    line-height: 20px;
    padding: 0px 10px 10px 10px;
  }
  .checkbox{
    padding: 10px 0px 0px 0px;
  }
  </style>