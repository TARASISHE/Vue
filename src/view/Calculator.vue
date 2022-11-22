<template>
  <h1>Calculator</h1>
  <div class="app">
  <div class="calculator">
    <input  type="text" @keyup.enter="calc()" @input="show($event.target.value)" v-model="result" placeholder="0">
    <button class="cell num" @click="show(num)" v-for="num in numbers" :key="num">{{num}}</button>
    <button class="cell op" @click="show(op)" v-for="op in operations" :key="op">{{op}}</button>
    <button class="cell op" @click="calcPercent()">%</button>
    <button class="cell op" @click="reset()">R</button>
    <button class="cell op" @click="calc()">=</button>
  </div>
</div>
</template>


<script>

export default{
  components: {
   
  },
  data(){
    return{
      result:'',
      numbers:[1,2,3,4,5,6,7,8,9,0],
      operations:['+','-','*','/','.',]
    }
  },
  methods:{
    show(char){
      this.result='';
      console.log(this.result)
      this.result = this.result.toString();
      if (typeof char === 'number'){
        this.result += char;
      }
    },
    reset(){
      this.result='';
    },
    calc(){
      this.result = eval(this.result)
    },
    calcPercent(){
      this.result = `${parseFloat(this.result) / 100}`;
    }

  },
  watch:{
    result(val){
      console.log(val)
    }
  },
}
</script>



<style scoped>
  input{
    width:100%;
    height: 50px;
  }
  h1{
    text-align: center;
  }
  .app{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .calculator {
    display: flex;                       
  flex-wrap: wrap;  
  justify-content: space-around;
  width: 40%;
}

input[type="text"] {
  width: 100%;
  height: 40px;
  border: 0;
  color: #243849;
  font-size: 18px;
  padding: 5px 5px;
  text-align: right;
}

.cell {
  flex: 33%;                       
  height: 50px;
  font-size: 18px;
  border: 1px solid gray;
}

.num{
  background-color: #243849;
  color: #fff;
  font-weight: 400;
  transition: all 0.2s ease 0s;
}
.num:hover{
  background-color: #fff;
  color:#243849 ;
}

.op {
  background-color: #ff9900;
  color: #243849;
  transition: all 0.2s ease 0s;
}
.op:hover{
  background-color: #fff;
  color:#243849 ;
}
</style>



<!---
<template>
  <h1>Calculator</h1>
  <div class="app">
  <div class="calculator">
    <input  type="text" @keyup.enter="calc()" v-model="result" placeholder="0">
    <button class="cell num" @click="show(num)" v-for="num in numbers" :key="num">{{num}}</button>
    <button class="cell op" @click="show(op)" v-for="op in operations" :key="op">{{op}}</button>
    <button class="cell op" @click="reset()">R</button>
    <button class="cell op" @click="calc()">=</button>
  </div>
</div>
</template>



<script>

export default{
  data(){
    return{
      result:'',
      numbers:[1,2,3,4,5,6,7,8,9,0],
      operations:['+','-','*','/','.','%']
    }
  },
  methods:{
    show(char){
      this.result = this.result.toString();
      this.result += char;
    },
    reset(){
      this.result='';
    },
    calc(){
      this.result = eval(this.result)
    }
  }
}

 
</script>



<style scoped>
  input{
    width:100%;
    height: 50px;
  }
  h1{
    text-align: center;
  }
  .app{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .calculator {
    display: flex;                       
  flex-wrap: wrap;  
  justify-content: space-around;
  width: 40%;
}

input[type="text"] {
  width: 100%;
  height: 50px;
  border: 0;
  color: #243849;
  font-size: 18px;
  padding: 5px 5px;
  text-align: right;
}

.cell {
  flex: 33%;                       
  height: 50px;
  font-size: 18px;
  border: 1px solid gray;
}
.num{
  background-color: #243849;
  color: #fff;
  font-weight: 400;
}
.num:hover{
  background-color: #fff;
  color:#243849 ;
}
.zero {
  grid-column: 1 / 3;
  background-color: #243849;
  color: #fff;
  font-weight: 400;
}
.zero:hover{
  background-color: #fff;
  color:#243849 ;
}
.op {
  background-color: #ff9900;
  color: #243849;
}
.op:hover{
  background-color: #fff;
  color:#243849 ;
}
</style>
-->











<!--
  <template>
  <h1>Calculator</h1>
  <div class="calculator">
    <input class="display" type="text" placeholder="0" v-model="result">
    <button class="cell" 
    v-for="num in numberBtns" 
    :key="num.name" 
    :class="num.class" 
    @click="num.handler"
    >
    {{num.name}}
  </button>
  </div>
</template>

<script>
export default{
  data(){
    return {
      operatorClicked: false,
      operator: null,
      result: '',
      previous:null,
      current:0,
      numberBtns:[
        {
          name: 'R',
          class: 'op',
          handler:this.clear,
        },
        {
          name: '+/-',
          class: 'op',
          handler: this.changeSign,

        },
        {
          name: '%',
          class: 'op',
          handler: this.getPercent,
        },
        {
          name: '÷',
          class: 'op',
          handler:this.divide,
        },
        {
          name: 1,
          class: 'num',
          handler:this.append,
        },
        {
          name: 2,
          class: 'num',
          handler:this.append,
        },
        {
          name: 3,
          class: 'num',
          handler:this.append,
        },
        {
          name: '-',
          class: 'op',
          handler:this.subtract,
        },
        {
          name: 4,
          class: 'num',
          handler:this.append,
        },
        {
          name: 5,
          class: 'num',
          handler:this.append,
        },
        {
          name: 6,
          class: 'num',
         handler:this.append,
        },
        {
          name: 'x',
          class: 'op',
          handler:this.multiply,
        },
        {
          name: 7,
          class: 'num',
          handler:this.append,
        },
        {
          name: 8,
          class: 'num',
         handler:this.append,
        },
        {
          name: 9,
          class: 'num',
          handler:this.append,
        },
        {
          name: '+',
          class: 'op',
          handler:this.add,
        },
        {
          name: 0,
          class: 'num, zero',
          handler:this.append,
        },
        {
          name: '.',
          class: 'op',
          handler: this.useDot,
        },
        {
          name: '=',
          class: 'op',
          handler: this.getResult,
        },
      ]
    }
  },
  methods:{
    append(number) {
      if (this.operatorClicked) {
        this.result = '';
        this.operatorClicked = false;
      }
      this.result = `${this.result}${number}`;
      console.log(this.result)
    },
    clear(){
      this.result = '';
    },
    changeSign() {
      this.result = this.result.charAt(0) === '-' ? 
      this.result.slice(1) : `-${this.result}`;
    },
    getPercent(){
      this.result = `${parseFloat(this.result) / 100}`;
    },
    useDot(){
      if (this.result.indexOf('.') === -1) {
        this.append('.');
      }
    },
    getResult(){
     this.result = eval(this.result);
    },
     getResult() {
      this.result = `${this.operator(
        parseFloat(this.result), 
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    },
    setPrevious() {
      this.previous = this.result;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    multiply(){
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    subtract(){
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    add(){
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    }
  }

 
</script>



<style scoped>
  h1{
    text-align: center;
  }
  .calculator {
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
  font-size: 20px;
  text-align: right;
}

.cell {
  flex: 33%;                       
  height: 50px;
  font-size: 18px;
  border: 1px solid gray;
}
.num{
  background-color: #243849;
  color: #fff;
  font-weight: 400;
}
.num:hover{
  background-color: #fff;
  color:#243849 ;
}
.zero {
  grid-column: 1 / 3;
  background-color: #243849;
  color: #fff;
  font-weight: 400;
}
.zero:hover{
  background-color: #fff;
  color:#243849 ;
}
.op {
  background-color: #ff9900;
  color: #243849;
}
.op:hover{
  background-color: #fff;
  color:#243849 ;
}
</style>
-->