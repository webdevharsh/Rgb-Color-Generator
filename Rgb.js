let r = document.querySelector('.container .r input');
let g = document.querySelector('.container .g input');  
let b = document.querySelector('.container .b input');
let textCode = document.querySelector('.container .rgb-code span');
let outputBox = document.querySelector('.container .output');
let copyBtn = document.querySelector('.container .rgb-code .copy-btn');

let generateColor =()=>{
  let color = `rgb(${r.value},${g.value},${b.value})`;  
  textCode.innerHTML = color;
  outputBox.style.backgroundColor = color;
}

copyBtn.addEventListener('click',()=>{
   navigator.clipboard.writeText(textCode.innerHTML); 
})

r.addEventListener('input',generateColor);
g.addEventListener('input',generateColor);
b.addEventListener('input',generateColor);
