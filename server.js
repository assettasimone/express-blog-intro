const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Server del mio Blog')
})

const blogArticles = [
    {
        title: "il mio primo Articolo",
        content: "Questo è il contenuto del mio primo articolo"
        coverImage: "imgs/anatra.jpg"
        tags: ["tag1", "tag2", "tag3"]
    },
    {
        title: "il mio secondo Articolo",
        content: "Questo è il contenuto del mio primo articolo"
        coverImage: "imgs/anatra.jpg"
        tags: ["tag1", "tag2", "tag3"]
    },
    {
        title: "il mio terzo Articolo",
        content: "Questo è il contenuto del mio primo articolo"
        coverImage: "imgs/anatra.jpg"
        tags: ["tag1", "tag2", "tag3"]
    },
    {
        title: "il mio quarto Articolo",
        content: "Questo è il contenuto del mio primo articolo"
        coverImage: "imgs/anatra.jpg"
        tags: ["tag1", "tag2", "tag3"]
    },
    {
        title: "il mio quinto Articolo",
        content: "Questo è il contenuto del mio primo articolo"
        coverImage: "imgs/anatra.jpg"
        tags: ["tag1", "tag2", "tag3"]
    }
]

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
})