<template>
    <div class="item" >
        <h3 class="item-title">{{itemTitle[0]}}</h3>
        <p class="item-text">{{itemText[0]}}</p>
        <button class="btn">
            <router-link class="link" to="/calculator">Try</router-link>
        </button>
    </div>
    <div class="item" >
        <h3 class="item-title">{{itemTitle[1]}}</h3>
        <p class="item-text">{{itemText[1]}}</p>
        <button class="btn">
            <router-link class="link" to="/todo-list">Try</router-link>
        </button>
    </div>
    <div class="item" >
        <h3 class="item-title">{{itemTitle[2]}}</h3>
        <p class="item-text">{{itemText[2]}}</p>
        <button class="btn">
            <router-link class="link" to="/">Try</router-link>
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            itemTitle:["Calculator", "Todo-List", "Weather Forecast"],
            itemText : ["Try to use app-calculator",
                        "Try to use app-todo-list",
                        "Try to use app-weather-forecast",]
        }
    }
}
</script>

<style>
.item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
    border-radius: 15px;
    margin: 50px 50px 0px 50px;
    width: 250px;
    height: 350px;
    background-color: coral;
    box-shadow: 10px 5px 5px orangered;
    
}
.item-title {
    text-transform: uppercase;
}
.item-text{
    font-size: 14px;
    margin-top: 40px; 
}

.btn {
    width: 150px;
    height: 30px;
    border-radius: 15px;
    background-color:rgb(232, 73, 16) ;
    border: 1px solid rgb(61, 40, 2);
    margin-top: 40px;
    transition: all 0.3s ease 0s; 
    color: #FFF;
}

.btn:hover{
    background-color: rgb(61, 40, 2) ;
    border: 1px solid coral;
    color: #FFF;
}

.link{
    color:#FFF;
    font-size: 15px;
}


</style>

