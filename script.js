 function coinFlip(){
    let flip = Math.random()
    console.log(flip)
    if(flip< 0.5){
        setTimeout(() => {
            document.querySelector('.result').innerHTML = 'orzeł'
        }, 3100);
        
    } else {setTimeout(()=>{
        document.querySelector('.result').innerHTML = 'reszka'
    },3100)
    }
 }
  function rotationCoin(){
   let button= document.querySelector('.coin');
   button.classList.add('rotation')
   setTimeout(()=>{
    if(button.classList.contains('rotation')){
        button.classList.remove('rotation')
    }
   }, 3000)
}
