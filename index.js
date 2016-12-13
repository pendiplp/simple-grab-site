const express = require('express')
	, request = require('request');

const app = express();

app
	.get('/*', (req, res) => {
		if (req.url == '/favicon.ico') return;

		const url = req.query.url;
		if (!url) {
			res.send('not found!');
			return;
		}

 		request(url, (error, response, html) => {
 			if (error) {
 				res.send('failed');
 				return;
 			};

 			if (response.statusCode !== 200) {
 				res.send(response.statusCode);
 				return;
 			}

 			res.send(html);
 		});
	})

	.set('port', (process.env.PORT || 5000))

	.listen(app.get('port'), () => {
		console.log('Node app is running on port', app.get('port'));
	});