
document.querySelector('button').addEventListener('click', characterInfo)
const characterOrigin = document.querySelector('#originGame')

function characterInfo() {
    const character = document.querySelector('input').value
    const url = `http://localhost:8000/api/${character}`

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            document.querySelector('#name').innerText = data.name
            characterOrigin.innerText = data.origin
            document.querySelector('#homeWorld').innerText = data.homeWorld
            document.querySelector('img').src = data.pic
        })




        .catch((err) => {
            console.log(`error ${err}`);
        })
}
