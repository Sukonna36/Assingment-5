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
  const callButtons = document.getElementsByClassName('call-button');

  const historyEntries = document.getElementById('history-entries');
  const clearBtn = document.getElementById('clear-history');
  clearBtn.addEventListener('click', function(){
    historyEntries.innerHTML = '';
  });

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

      const historyCard = document.createElement('div');
      historyCard.classList.add('flex', 'justify-between', 'items-center','text-black', 'bg-[#f2f2f2]','rounded-md', 'py-2', 'pl-3');
      
      const left = document.createElement('div');
      left.innerHTML =
       `<div class="history-service-name font-semibold">${surviceName}</div>
        <div class='history-service-number text-gray-600 text-sm'>${surviceNumber}</div>`;
        
        const right = document.createElement('div');
        right.innerText = new Date().toLocaleTimeString();
        right.classList.add('text-gray-400', 'text-sm'); 
        historyCard.appendChild(left);
        historyCard.appendChild(right);
        historyEntries.appendChild(historyCard);
      });
  }



  // copy button
  let copyCount = 0;
  const copyNumber = document.getElementById('copy-count');
  const copyButtons = document.querySelectorAll('.copy-btn')
  copyButtons.forEach(btn=> {
    btn.addEventListener('click', function(){
      const card = this.closest('.service-card')
      const number = card.querySelector('.survice-number').innerText;


      navigator.clipboard.writeText(number).then(() => {
        copyCount++
        copyNumber.innerText = copyCount;
        alert("Number Copied:" + number)
      })
    })

    })
  
