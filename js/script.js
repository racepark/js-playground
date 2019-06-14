const counter = {
    number: 0,
    increment: function(number = 1){ // default parameter
      if(typeof number !== 'number') number = 1;
      this.number += number;
    },
    decrement: function(){
      this.number -= 1;
    },
    reset: function(number = 0){ 
      if(typeof number !== 'number') number = 0;
      this.number = number;
    },
    getCount: function(){
      return this.number;
    }
}

const setInput = function(){
    const $input = document.querySelector('#numberInput');
    $input.value = counter.getCount();
}

const counterFunc = function(bio){
    bio && counter[bio]();
    setInput();
}

const init = function(){
    setInput();
    counterFunc();
}

window.onload = function(){
    const $plusButton = document.querySelector('#btnPlus');
    const $minusButton = document.querySelector('#btnMinus');
    const $resetButton = document.querySelector('#btnReset');

    init();

    $plusButton.addEventListener('click', function(){
        counterFunc('increment');
    });

    $minusButton.addEventListener('click', function(){
        counterFunc('decrement');
    });

    $resetButton.addEventListener('click', function(){
        counterFunc('reset');
    });
}