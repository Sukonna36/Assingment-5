// heart icon count
let count = 0;
const heartCount = document.getElementById('heart-count');
const hearts = document.getElementsByClassName('heart-icon');

for(let i=0; i<hearts.length; i++){
  hearts[i].addEventListener('click', function(){
    count++
    heartCount.innerText = count;
  })
}



// call button

  let coins = 100;
  const coinCount = document.getElementById('coin-count');

 const callButtons = document.getElementsByClassName('call-button')
  for( let button of callButtons ){
    button.addEventListener('click', function(){
      const card = this.parentElement.parentElement.parentElement;
      const surviceName = card.querySelector('.survice-name').innerText;
      const surviceNumber = card.querySelector('.survice-number').innerText;

      if(coins >=20){
        coins -=20;
        coinCount.innerText = coins;
      }
      else{
        alert("Not Enough Coins")
        return;
      }
      
      alert("📞 Calling " + surviceName + " " + surviceNumber);

      

    })
  }