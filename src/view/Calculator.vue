<template>

    <h1>Calculator</h1>
    <div class="calculator">
        <div class="display">{{current || '0' }}</div>
        <button @click="clear"  class="op">C</button>
        <button @click="sign" class="op">+/-</button>
        <button @click="percent" class="op">%</button>
        <button @click="divide" class="op">÷</button>
        <button  @click="append('7')" class="number">7</button>
        <button  @click="append('8')" class="number">8</button>
        <button  @click="append('9')" class="number">9</button>
        <button @click="times" class="op">x</button>
        <button  @click="append('4')" class="number">4</button>
        <button  @click="append('5')" class="number">5</button>
        <button  @click="append('6')" class="number">6</button>
        <button @click="minus" class="op">-</button>
        <button  @click="append('3')" class="number">3</button>
        <button  @click="append('2')" class="number">2</button>
        <button  @click="append('1')" class="number">1</button>
        <button  @click="add" class="op">+</button>
        <button  @click="append('0')" class="number zero">0</button>
        <button  @click="dot" class="op">.</button>
        <button @click="equal" class="op">=</button>
    </div>
</template>

<script>

export default{
    data(){
        return{
            previous: null,
            current : '',
            operator: null,
            operatorClicked:false,
        }
    },
    methods:{
        clear() {
      this.current = '';
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ? 
        this.current.slice(1) : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => b / a;
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => b - a;
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.current), 
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    }
        
    }
}
</script>

<style scoped>
        h1{
          text-align: center;
          margin-bottom: 50px;
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
            text-align: right;
            padding: 0px 10px;
        }

        .zero {
            grid-column: 1 / 3;
        }

        .number{
            background-color: #F2F2F2;
            border: 1px solid #999;
            font-size: 20px;
            transition: all 0.2s;
        }

        .number:hover{
          background-color: orange;
          color: white;
        }
        .op{
            background-color: orange;
            color: white;
            border: 1px solid #999;
            font-size: 20px;
            transition: all 0.2s;
        }

        .op:hover{
          background-color: white;
          color: orange;
        }
</style>