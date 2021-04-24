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
