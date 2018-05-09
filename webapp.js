const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/andrew', function (req, res) {
	res.send('<h1>Hello Andrew!</h1><p>How are you?</p>');
});

app.get('/irving', function (req, res) {
	res.send('Hello, Irving!');
});

app.get('/errbody', function (req, res) {
	res.send('Hello, Errbody!');
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));