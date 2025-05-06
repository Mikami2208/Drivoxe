

export function initBurgerMenu(): void {
    const burgerIcon = document.querySelector('.menu__icon') as HTMLElement;
    const burgerMenu = document.querySelector('.burger__body') as HTMLElement;
    
    if(burgerIcon && burgerMenu){
        burgerIcon.addEventListener('click', () =>{
            burgerMenu.classList.toggle('_active')
            document.body.classList.toggle('_lock')
            document.body.classList.toggle('_burger-active')
        })
    }
}    
