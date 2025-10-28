let count = 0;
const heartCount = document.getElementById('heart-count');
const hearts = document.getElementsByClassName('heart-icon');

for(let i=0; i<hearts.length; i++){
  hearts[i].addEventListener('click', function(){
    count++
    heartCount.innerText = count;
  })
}