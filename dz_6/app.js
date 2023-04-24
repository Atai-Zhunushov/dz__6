const input = document.getElementById('input')
const createButton = document.querySelector("#create_button")
const todolist = document.querySelector('#todo_list')

const createTodo = () => {
    if (input.value.trim() === '') {
        return false
    } else {
        let arr = []
        arr.push(input.value)
        arr.forEach(i => {
            const h3 = document.createElement('h3')
            h3.innerText = i.split('').reverse().join('')
            todolist.append(h3)
        })
        input.value = ''
    }
}

createButton.onclick = () => createTodo()
window.addEventListener('keydown' , (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
})






















// const createImg = document.getElementById('button')
// createImg.addEventListener('click' , () => {
//     const div = document.createElement('div')
//     div.style.width = '500px'
//     div.style.height = '500px'
//     div.style.backgroundImage = 'url(https://shailoo.gov.kg/media/Talanat/2022/06/01/img_8417.JPG)'
//     div.style.backgroundRepeat = 'no-repeat'
//     div.style.backgroundSize = 'cover'
//     div.style.marginTop = '20px'
//
//     document.body.append(div)
//
// })