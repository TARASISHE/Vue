<template>
    
    <h1> Todo-List</h1>
    <div class="container">
        <div class="centre">
            <div class="width">
                <input  class="maininput" type="text" placeholder="Add your note" v-model="todo">
                <button  class="btn-add" type="submit" value="add" @click="noteHandler" v-text="actionButtonName" />
             </div>
            <ul class="border">
                <li class="todo" v-for="(todo, index) in todos" :key="todo">
                {{index + 1}} {{ todo }}
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
    components: {
    },

    data(){
        return{
            selectedIndex: null,
            isEditing : false,
            todo:'',
            todos:[],
        }
    },
    computed:{
        actionButtonName(){
            return this.isEditing ? "Edit" : "Add Note";
        }
    },
    methods:{
        noteHandler () {
            if (this.isEditing) {
                this.updateTodo();
            } else {
                this.addToDo();
            }
        },
        
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
            this.todo = ''
        },
    }
}

</script>

<style  scoped>
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
        background-color:rgb(0, 178, 124) ;
        border: none;
        margin: 20px 0px 0px 0px;
        color: #FFF;
        font-size: 16px;
        transition: all 0.2s;
        }
    .btn-add:hover{
        background-color:rgb(0, 252, 176) ; 
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
        background-color:rgb(0, 178, 124) ;
        border: none;
        margin: 20px 20px 0px 0px;
        color: #FFF;
        font-size: 16px;
        transition: all 0.2s;
    }

    .btn-delete{
        width: 100px;
        height: 30px;
        border-radius: 15px;
        background-color:rgb(0, 178, 124) ;
        border: none;
        margin: 20px 20px 0px 0px;
        color: #FFF;
        font-size: 16px;
        transition: all 0.2s;
    }
    .btn-edit:hover{
        background-color:#FFF ;
        border:2px rgb(0, 178, 124);
        color: rgb(0, 178, 124);
    }
    .btn-delete:hover{
        background-color:#FFF ;
        border:2px rgb(0, 178, 124);
        color: rgb(0, 178, 124);
    }
    .width{
        width: 100%;
    }
</style>
