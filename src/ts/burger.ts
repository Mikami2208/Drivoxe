
const burgerIcon = document.querySelector('.menu__icon')
const burgerMenu = document.querySelector('.burger__body')

burgerIcon?.addEventListener('click', () =>{
    burgerMenu?.classList.toggle('_active')
    document.body.classList.toggle('_lock')
})