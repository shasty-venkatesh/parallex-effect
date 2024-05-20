const train=document.getElementById('train');
const boat=document.getElementById('boat');
document.addEventListener('scroll',()=>{
    let value=window.scrollY;
    train.style.marginLeft=value*2.5+'px';
    boat.style.marginLeft=value*0.5+'px';
});