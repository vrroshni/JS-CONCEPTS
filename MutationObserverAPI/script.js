const parent = document.querySelector('.parent')
const randomcolor=()=>{
    for (let i = 0; i < 10; i++) 
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}


const observer = new MutationObserver((entries) => {

    parent.style.backgroundColor = randomcolor()


})


observer.observe(parent, {
    subtree: true,
    childList: true
})

document.querySelector('.btn').addEventListener("click",() => {
    parent.childNodes[0].remove()
})