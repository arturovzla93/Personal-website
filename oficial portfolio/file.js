$(document).ready(()=>{
    $('.servicio-cont').on('click', ()=>{
        $('servicio-ind').show();
    });
})

window.addEventListener('load', function(){
    const loader=document.querySelector('.loader');
    loader.className +="hidden"
});