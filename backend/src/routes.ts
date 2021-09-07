import { Router } from 'express';

import { createUserController } from '@UseCases/CreateUser';

const router = Router();

router.get('/', (request, response) => {
	return response.status(200).json({
		message: 'First Route!'
	});
});

router.post('/users', (request, response) => {
	return createUserController.handle(request, response);
})

export { router };