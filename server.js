const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


const character = {
    'mario': {
        'name': 'Mario',
        'origin': 'Donkey Kong',
        'homeWorld': 'Mushroom Kingdom',
        'pic': 'mario.jpeg'
    },
    'luigi': {
        'name': 'Luigi',
        'origin': 'Mario Bros.',
        'homeWorld': 'Mushroom Kingdom',
        'pic': 'luigi.jpeg'
    },
    'donkey kong': {
        'name': 'Donkey Kong',
        'origin': 'Donkey Kong Arcade Game ',
        'homeWorld': 'Donkey Kong Island',
        'pic': 'donkeykong.jpeg'
    },
    'link': {
        'name': 'Link',
        'origin': 'The Legend of Zelda',
        'homeWorld': 'Hyrule',
        'pic': 'link.jpeg'
    },
    'samus': {
        'name': 'Samus',
        'origin': 'Metroid',
        'homeWorld': 'Earth colony K-2L',
        'pic': 'samus.jpeg'
    },
    'captain falcon': {
        'name': 'Captain Falcon',
        'origin': 'F-Zero',
        'homeWorld': 'Port Town',
        'pic': 'captainfalcon.jpeg'
    },
    'yoshi': {
        'name': 'Yoshi',
        'origin': 'Super Mario World',
        'homeWorld': "Yoshi's Island",
        'pic': 'yoshi.jpeg'
    },
    'ness': {
        'name': 'Ness',
        'origin': 'EarthBound',
        'homeWorld': 'Onett in Eagleland',
        'pic': 'ness.jpeg'
    },
    'kirby': {
        'name': 'Kirby',
        'origin': "Kirby's Dream Land",
        'homeWorld': 'Dream Land',
        'pic': 'kirby.jpeg'
    },
    'fox': {
        'name': 'Fox',
        'origin': 'Star Fox 64 ',
        'homeWorld': 'Final Destination',
        'pic': 'fox.jpeg'
    },
    'pikachu': {
        'name': 'Pikachu',
        'origin': 'Pokémon Red and Green',
        'homeWorld': 'Pokemon World',
        'pic': 'pikachu1.jpeg'
    },
    'jigglypuff': {
        'name': 'Jigglypuff',
        'origin': 'Pokémon Red and Blue',
        'homeWorld': 'Kanto ',
        'pic': 'jiggly.jpeg'
    },
    'unknown': {
        'name': 'NOT AN OG',
        'origin': 'unknown',
        'homeWorld': 'unknown',
        'pic': 'tryagain.jpeg'
    }
}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/js/main.js', (request, response) => {
    response.sendFile(__dirname + '/js/main.js')

})

app.get('/css/style.css', (request, response) => {
    response.sendFile(__dirname + '/css/style.css')
})
app.get('/css/n64.jpeg', (request, response) => {
    response.sendFile(__dirname + '/css/n64.jpeg')
})

app.use(express.static(__dirname + '/css/pic'))


app.get('/api/:name', (request, response) => {
    const characterName = request.params.name.toLowerCase()

    if (character[characterName]) {
        response.json(character[characterName])
    } else {
        response.json(character['unknown'])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})