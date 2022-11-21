<template>
    <h1> Todo-List</h1>
    <div class="container">
        <div class="centre">
            <div class="width" v-if="!isEditing">
            <input  class="maininput" type="text" placeholder="Add your note" v-model="todo">
            <button  class="btn-add" type="submit" value="add" @click="addToDo">Add Note</button>
             </div>
             <div class="width" v-else>
                <input  class="maininput" type="text" v-model="todo">
                <button  class="btn-add" type="submit" value="update" @click="updateTodo">Update Note</button> 
             </div>
            <ul class="border">
                <li class="todo" v-for="(todo, index) in todos" :key="todo">
                {{index + 1}}) {{ todo }}
                <div>
                <button @click="editTodo(todo, index)" class="btn-edit">Edit</button>
                <button @click="deleteTodo(index)" class="btn-delete">Delete</button>
                </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{
            selectedIndex: null,
            isEditing : false,
            todo:'',
            todos:[],
        }
    },
    methods:{
        addToDo(){
            this.todos.push(this.todo);
            this.todo = ''
        },

        deleteTodo(index){
            this.todos.splice(index,1)
        },

        editTodo(todo, index){
            console.log(todo)
            this.todo = todo;
            this.selectedIndex = index;
            this.isEditing = true;  
        },

        updateTodo(){
            this.todos.splice(this.selectedIndex, 1 , this.todo);
            this.isEditing = false;
        },
    }
}

</script>

<style>
    h1{
        text-align: center;
    }
    .container{
        max-width: 1240px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .centre{
        display: flex;
        width:60%;
        align-items: baseline;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .maininput{
        border-radius: 5px;
        width:100%;
        height: 25px;
        border: none;
        font-size: 16px;
    }
    .btn-add{
        width: 200px;
        height: 30px;
        border-radius: 15px;
        background-color:rgb(232, 73, 16) ;
        border: 1px solid rgb(61, 40, 2);
        margin: 20px 0px 0px 0px;
        color: #FFF;
        font-size: 16px;
        transition: all 0.2s;
        }
    .btn-add:hover{
        background-color:rgb(217, 14, 14) ; 
    }
    .todo{
        margin: 20px 0px;
        font-size: 20px;
        color: #000;
    }
    .border{
        margin: 30px 0px 0px 0px;
        width: 100%;
        border-top:1px solid gray ;
        display: inline-block;
    }
   

    .btn-edit{
        width: 100px;
        height: 30px;
        border-radius: 15px;
        background-color:rgb(232, 73, 16) ;
        border: 1px solid rgb(61, 40, 2);
        margin: 20px 20px 0px 0px;
        color: #FFF;
        font-size: 16px;
        transition: all 0.2s;
    }

    .btn-delete{
        width: 100px;
        height: 30px;
        border-radius: 15px;
        background-color:rgb(232, 73, 16) ;
        border: 1px solid rgb(61, 40, 2);
        margin: 20px 20px 0px 0px;
        color: #FFF;
        font-size: 16px;
        transition: all 0.2s;
    }
    .btn-edit:hover{
        background-color:#FFF ;
        border:2px solid rgb(232, 73, 16);
        color: rgb(232, 73, 16);
    }
    .btn-delete:hover{
        background-color:#FFF ;
        border:2px solid rgb(232, 73, 16);
        color: rgb(232, 73, 16);
    }
    .width{
        width: 100%;
    }
</style>