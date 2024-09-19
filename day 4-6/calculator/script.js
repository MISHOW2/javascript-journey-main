let numberBtn = document.querySelectorAll('.btn');

let operatorbtn = document.querySelectorAll('.btn-operator');
let equalBtn =document.getElementById("equals");
let display = document.getElementById("calc-display");
let clearBtn = document.getElementById('clear');

let currNum = "";
let nextNum = ""; 
let operator = "";   
numberBtn.forEach(btn =>{
  btn.addEventListener("click", ()=>{
  display.value += btn.textContent;
     
  });
});

operatorbtn.forEach(btn=>{
  btn.addEventListener("click", ()=>{
  const value = btn.textContent;

  if (!isNaN(value) || value === ".") {
      
      display.value += value;
  } else if (value === "+" || value === "-" || value === "*" || value === "/") {
    
      currNum = display.value;
      operator = value; 
      display.value = ""; 
  }
     
  });
});


equalBtn.addEventListener("click",()=>{
    nextNum = display.value;
     let firstNum = parseFloat(currNum);
     let secNum  = parseFloat(nextNum);
     let result;
     
     switch (operator){
      case "+":
      result = firstNum + secNum;
      break;

      case "-":
        result = firstNum - secNum;
      break;

      case "*":
        result = firstNum * secNum;
      break;

      case "/":
        result = firstNum / secNum;
      break;
     }
     
      // Display the result
      display.value = result;
  
});


clearBtn.addEventListener("click", ()=>{
  currNum = "";
  nextNum = ""; 
  operator = "";  

  display.value = ""; 
});