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
                        <a href="">Weather Forecast</a>
                    </li>
                </ul>
                <a class="auth" href="">Log-In</a>
            </div>
        </div>
    </div>
    <div class="img-main">
       
    </div>
</template>

<script>

export default{

}
</script>

<style>
    body{
         margin: 0;
         background-color:rgba(240, 197, 118, 0.878);
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
        background-color: orange;
        
    }

    .container{
        max-width: 1240px;
        margin: 0 auto;

    }
    .img-main {
        width: 100%;
        height: 200px;
        opacity: 0.8;
        background-image: url(../img/kyiv-ukraine-may-20-2020-260nw-1738508276.webp);
        background-repeat: no-repeat;
        background-size:cover;
        background-position: center;
       
    }
    .body{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100px;
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
