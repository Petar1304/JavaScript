let express = require('express')
let app = express()

app.get('/:id', (req, res) => {
	res.send('Ovo je id prosledjen kroz URL ' + req.params.id);
});

app.get('/studenti/:ime/:id', (req, res) => {
   res.send('id studenta: ' + req.params.id + ', ime studenta: ' + req.params.ime);
});

app.get('*', (req, res) => {
	res.send('Neispravan URL!');
});

app.listen(8080);