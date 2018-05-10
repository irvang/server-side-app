function controller(app) {
	app.get('/', (req, res) => res.send('Hello World!'));

	app.get('/andrew', function (req, res) {
		res.send('<h1>Hello Andrew!</h1><p>How are you?</p>');
	});

	app.get('/irving', function (req, res) {
		res.send('Hello, Irving!');
	});

	app.get('/errbody', function (req, res) {
		res.send(`<h2> Hello, the world.`);
		console.log(res.headers);
	});
}

module.exports = controller;
