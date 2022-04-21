const contBox = document.querySelector('.container-box');
const listNumber = [];


init();
function init(){
  for(let i = 0; i < 100; i++){
   const boxFun = newBox(contBox);
   boxFun.addEventListener('click',function(){
     
     this.classList.add('active');
    //  this.classList.remove('')
   })
  }
} 

function newBox(myTarget){
  const box = document.createElement('div');
  box.className= 'box';  //aggiungiamo la classe presente in css.
  const num = getNumberFiltered(1, 100);
  box.innerHTML = `<span>${num}</span>`
  box.classList.add(getOddEvev(num))
  myTarget.append(box)
  return box;
}

function getRandomNumber(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
} 
//adesso filtriamo i nostri numeri per evitare ripetizioni.

  function getNumberFiltered(min, max){
  let numberFiltered;
  let validNumber;
  while(!validNumber){
    numberFiltered = getRandomNumber(min, max);
    if(!listNumber.includes(numberFiltered)){
      validNumber=true;
      listNumber.push(numberFiltered);
    }
  }
  return numberFiltered;
}

//adesso andiamo a inserire le classi attraverso le funzioni.

function getOddEvev(n){
  if(n % 2)return 'odd';
  return 'even';
}