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

	.listen(3000, () => {
  		console.log('App listening on port 3000!')
	});