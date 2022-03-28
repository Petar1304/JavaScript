const express = require('express')
const app = express()

app.get('/:id', (req, res) => {
	res.send('Ovo je id prosledjen kroz URL ' + req.params.id);
});

app.get('/studenti/:ime/:id', (req, res) => {
   res.send('id studenta: ' + req.params.id + ', ime studenta: ' + req.params.ime);
});

app.get('*', (req, res) => {
	res.send('Neispravan URL!');
});

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(express.static('public/static'))

app.get('/sendHtml', (req, res) => {
    res.sendFile('public/static/index.html')
})

app.listen(8080, () => console,log('Server started on port 8080'));
