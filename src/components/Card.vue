<template>
    <div class="item" v-for="card in navCards" :key="card"> 
        <h3 class="item-title">{{card.title}}</h3>
        <p class="item-text">{{card.text}}</p> <!--@click="this.goToPage()"-->
        <button class="btn"> <!--@click="card.goToPage()"-->
            Try
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navCards:[
                {
                    title:"Calculator",
                    text : "Try to use app-calculator",
                   // goToPage: this.goToPageCalc(),
                },
                {
                    title:"Todo-List",
                    text : "Try to use app-todo-list",
                   // goToPage: this.goToPageTodoList(),
                },
                {
                    title:"Weather Forecast",
                    text : "Try to use app-weather-forecast",
                },
            ]
        }
    }, 
  /* methods:{
        goToPageCalc(){
            this.$router.push('/calculator');
        },
        goToPageTodoList(){
            this.$router.push('/todo-list');
        },
    }*/
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
    background-color: rgb(50, 205, 179);
    box-shadow: 10px 5px 5px rgb(0, 175, 146);
    
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
    background-color:rgb(0, 159, 111) ;
    border: none;
    margin-top: 40px;
    transition: all 0.3s ease 0s; 
    color: #000;
}

.btn:hover{
    background-color:rgb(0, 178, 124) ;
    border: none;
    color: #FFF;
}

.link{
    color:#FFF;
    font-size: 15px;
}


</style>

