export default function menuMobile(){
    const btnMobile = document.querySelector('#btn-mobile')
    btnMobile.addEventListener('click', function(){
        const menu = document.querySelector('.menu')
        menu.classList.toggle('active')
    })
}