const parent = document.querySelector('.parent')
const randomcolor=()=>{
    for (let i = 0; i < 10; i++) 
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}


const observer = new MutationObserver((entries) => {

    parent.style.backgroundColor = randomcolor()


})


observer.observe(parent, {
    childList: true,
    subtree:true

})

document.querySelector('.btn').addEventListener("click",() => {
    console.log(parent.childNodes)
    parent.childNodes[0].remove()
})