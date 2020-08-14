function show(){
    //getting domelementsto beanimatedon scroll
    var work1=document.querySelector('.work1');
    var work2=document.querySelector('.work2');
    var work3=document.querySelector('.work3');
    //getting their position
    var work1pos=work1.getBoundingClientRect().top;
    var work2pos=work2.getBoundingClientRect().top;
    var work3pos=work3.getBoundingClientRect().top;
    //somecalculation by trial and error to get desired effect
    //inspired byDEV ED on youtube
var screen=window.innerHeight*1.2;
if(work1pos<screen){
    //add animatin classto element
    work1.classList.add('fadeup')
}
if(work2pos<screen){
    work2.classList.add('slideleft')
}
if(work3pos<screen){
    work3.classList.add('fadeup')
}
}
// add windowlistener
window.addEventListener('scroll',show);