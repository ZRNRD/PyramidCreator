'use strict';

let pyrHeight__change = document.querySelector("#pyrHeight__change");
let pyrSymbol__change = document.querySelector("#pyrSymbol__change");

pyrHeight__change.addEventListener("input", (e)=>{
    document.querySelector("#pyrHeight__change__label").innerHTML = e.target.value;
  } 
)

pyrSymbol__change.addEventListener("change", (e)=>{
  addPyramid(pyrHeight__change.value, e.target[e.target.selectedIndex].value)
})

pyrHeight__change.addEventListener("input", (e)=>{
  addPyramid(e.target.value, pyrSymbol__change[pyrSymbol__change.selectedIndex].value)
})

addPyramid(pyrHeight__change.value, pyrSymbol__change[pyrSymbol__change.selectedIndex].value);

// Функция создания пирамиды
function addPyramid(height, symbol){
  let str = symbol;
  let pyramid = document.querySelector("#pyramid");
  pyramid.innerHTML = "";
  

  for(let i = 0; i < height; i++){
    str += symbol;
    pyramid.innerHTML += str + "<br>"
  }
}

