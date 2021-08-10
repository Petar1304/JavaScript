const express = require('express')
// const path = require('path')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public/static'))

app.listen(8080, () => console.log('Server started on port 8080...'))

app.get('/', (req, res) => {
    res.sendFile('public/static/index.html')
})