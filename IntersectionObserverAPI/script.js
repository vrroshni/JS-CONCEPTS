const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");


const loadnewCards=()=>{
for(let i=0;i<10;i++){
    const card=document.createElement('div')
    card.textContent="New card"
    card.classList.add("card")
    cardObserver.observe(card)
    cardContainer.append(card)
}
}

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        // if(entry.isIntersecting){
        //     cardObserver.unobserve(entry.target)
        // }
    })

}, {
    rootMargin: "100px"
})
const LastcardObserver = new IntersectionObserver((entries)=>{
    const lastCard=entries[0]
    if (!lastCard.isIntersecting) {
      return
    }
    loadnewCards()
    LastcardObserver.unobserve(lastCard.target)
    LastcardObserver.observe(document.querySelector('.card:last-child'))


}, {})

cards.forEach((card) => [
    cardObserver.observe(card)
]) 
LastcardObserver.observe(document.querySelector('.card:last-child'))


