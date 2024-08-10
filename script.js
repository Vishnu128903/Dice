let ps1=document.getElementById('score--0')
let ps2=document.getElementById('score--1')
let cs1=document.getElementById('current--0')
let cs2=document.getElementById('current--1')
let dice=document.querySelector('.dice')
let currentscore=0
let totalscore=[0,0]
let activeplayer=0
let playing=true


cs1.textContent=0
cs2.textContent=0
ps1.textContent=0
ps2.textContent=0


dice.classList.add('hidden')
document.querySelector('.player--0').classList.toggle('.player--active')

document.querySelector('.btn--roll').addEventListener('click',function(){
  if(playing==true){
    let gen_num=Math.trunc(Math.random()*6+1)
    console.log(gen_num)
    dice.classList.remove('hidden')
    dice.src=`/img/dice-${gen_num}.png`
    if(gen_num!=1){
        currentscore=currentscore+gen_num
        document.getElementById(`current--${activeplayer}`).textContent=currentscore
    }
    else{
        currentscore=0
        document.getElementById(`current--${activeplayer}`).textContent=0
        if (activeplayer==0){
            activeplayer=1;
            document.querySelector('.player--0').classList.toggle('player--active')
            document.querySelector('.player--1').classList.toggle('player--active')
        }
        else{
            activeplayer=0;
            document.querySelector('.player--0').classList.toggle('player--active')
            document.querySelector('.player--1').classList.toggle('player--active')
        }
    }
  }
})




document.querySelector('.btn--hold').addEventListener('click',function(){
  totalscore[activeplayer]=totalscore[activeplayer]+currentscore
  document.getElementById(`score--${activeplayer}`).textContent=totalscore[activeplayer]
  currentscore=0
  document.getElementById(`current--${activeplayer}`).textContent=0
  if(playing==true){
  if(totalscore[activeplayer]>=100){
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
    playing=false
  }
  else{
    currentscore=0
    document.getElementById(`current--${activeplayer}`).textContent=currentscore
    if (activeplayer==0){
      activeplayer=1;
      document.querySelector('.player--0').classList.toggle('player--active')
      document.querySelector('.player--1').classList.toggle('player--active')
  }
  else{
      activeplayer=0;
      document.querySelector('.player--0').classList.toggle('player--active')
      document.querySelector('.player--1').classList.toggle('player--active')
  }
  }
}
})

document.querySelector('.btn--new').addEventListener('click',function(){

currentscore=0
totalscore=[0,0]
activeplayer=0
playing=true


cs1.textContent=0
cs2.textContent=0
ps1.textContent=0
ps2.textContent=0


dice.classList.add('hidden')
document.querySelector('.player--0').classList.toggle('.player--active')
document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner')
playing=true
})
