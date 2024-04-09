const hmbgBtn = document.querySelector('.hambg--icon')
const closeNavBtn = document.querySelector('.closeNav--btn')
const navOptions = document.querySelector('.nav--inner')

console.log(navOptions)

function handleNav(){
    if(!hmbgBtn.classList.contains('opened')){
        hmbgBtn.classList.add('opened')
        closeNavBtn.classList.remove('closed')
        navOptions.classList.remove('closed')
    } else{
        hmbgBtn.classList.remove('opened')
        closeNavBtn.classList.add('closed') 
        navOptions.classList.add('closed')
    }
}

hmbgBtn.addEventListener('click', ()=>{
    handleNav()
})

closeNavBtn.addEventListener('click', ()=>{
    handleNav()
})