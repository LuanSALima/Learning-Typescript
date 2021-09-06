import express from 'express';

const app = express();

app.get('/', (request, response) => {
	return response.json({
		message: 'First Route!'
	});
});

app.listen(3030);