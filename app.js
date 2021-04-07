const mobileMenu = document.querySelector('#mobile-menu')
const navlist = document.querySelector('.navlist')

mobileMenu.addEventListener('click', () => {
 
    if(mobileMenu.classList.contains('active')){
        mobileMenu.classList.remove('active')
        navlist.classList.remove('active')
    }else{
        mobileMenu.classList.add('active')
        navlist.classList.add('active')
    }
})

