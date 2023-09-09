const box = document.querySelector('.box')
const randomcolor = () => {
    for (let i = 0; i < 10; i++)
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
const observer = new ResizeObserver(entries => {
    const target = entries[0]
    const isSmall = target.contentRect.width < 700
    target.target.style.backgroundColor = isSmall ? randomcolor() : "red"
})

observer.observe(box)