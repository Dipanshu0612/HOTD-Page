function ALERT(){
    alert("This page is still in development!!")
}
let counter=0
let music=new Audio('/Audio/main.mp3');
// music.play();

let musicbtn=document.getElementById('musicBTN');
let btntxt=document.getElementsByClassName('musicbtn');
// console.log(button);
musicbtn.onclick=()=>{
    counter+=1;
    if(counter%2==0){
        music.pause();
        btntxt[0].innerHTML="OFF"
        btntxt[0].classList.remove('green');
    }
    else{
        btntxt[0].innerHTML="ON"
        btntxt[0].classList.add('green');
        music.play();
    }
}

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.social',{origin:'top'})
ScrollReveal().reveal('.container',{origin:'bottom'})
ScrollReveal().reveal('.ITER1',{origin:'left'})
ScrollReveal().reveal('.ITER2',{origin:'right',delay:100})
