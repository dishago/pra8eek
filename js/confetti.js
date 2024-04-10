const confetiButton = document.querySelector('.party');
const confetiContainer = confetiButton.querySelector('.confeti');

confetiButton.addEventListener('click', () =>{

    confetiContainer.classList.add('explosion');
    confetiContainer.addEventListener('animationend', ()=>{
        confetiContainer.classList.remove('explosion');
    }, {once:true});

});