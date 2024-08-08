const btn = document.getElementById('btn')
const text = document.getElementById('text')

console.log(btn);
console.log(text);

btn.addEventListener('click',()=>{
  text.textContent='ボタンをクリックしました'
  })


