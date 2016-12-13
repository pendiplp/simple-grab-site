const express = require('express')
	, request = require('request');

const app = express();

app
	.get('/*', (req, res) => {
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

 			res.send(html);
 		});
	})

	.set('port', (process.env.PORT || 5000));

	.listen(app.get('port'), () => {
		console.log('Node app is running on port', app.get('port'));
	});