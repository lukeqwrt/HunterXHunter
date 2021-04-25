const mobileMenu = document.querySelector('#mobile-menu')
const navlist = document.querySelector('.navlist')
const mylink = document.querySelectorAll('.link');
mobileMenu.addEventListener('click', () => {
    if(mobileMenu.classList.contains('active')){
        mobileMenu.classList.remove('active')
        navlist.classList.remove('active')

    }else{
        mobileMenu.classList.add('active')
        navlist.classList.add('active')
        mylink.classList.add('moveIn')
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 1059){
        if(mobileMenu.classList.contains('active')){
            mobileMenu.classList.remove('active')
            navlist.classList.remove('active')
        }
    }
})



window.addEventListener('load', () => {
    const loader =  document.querySelector('.loader');
    loader.classList.add("hidden")
})


