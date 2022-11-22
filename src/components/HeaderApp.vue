<template>
    <div class="wrapper">
        <div class="container">
            <div class="body">
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
                <router-link class="auth" to="/Login">
                    Log-In
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default{
 
}
</script>

<style>
    body{
         margin: 0;
        background-color: #07c8d2fa;
        
    }

    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }

    .wrapper{
        width: 100%;
        margin: 0;
        padding: 0; 
    }

    .container{
        max-width: 1240px;
        margin: 0 auto;
    }
    .body{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100px;
        padding: 0px 15px;
    }
    .list{
        display: flex;
        gap: 40px;
    }
    .list-item a{
        color: #000;
    }
    .list-item{
        transition: all 0.5s ease 0s;
    }
    .list-item:hover {
        font-weight: 900;
        
    }
    .auth{
        color: #000;
        transition: all 0.5s ease 0s;
    }

    .auth:hover{
        font-weight: 900;
    }

</style>
