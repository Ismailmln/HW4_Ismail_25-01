const wrapper = document.querySelector('.wrapper')
const btn = document.querySelector('.btn')


btn.addEventListener('click', () => {

    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos")
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send()

    xhr.onload = () => {
        const data = JSON.parse(xhr.response)
        console.log(data)

        data.forEach(i => {
            const card = document.createElement('div')

            card.innerHTML = `
            <div class="card">
                <img class="img" src="${i.url}" alt="qwerty">          
                <p>${i.title}</p>      
            </div>`
            wrapper.append(card)
        })
    }
})