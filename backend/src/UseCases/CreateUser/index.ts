import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

import { MockUsersRepository } from '@Repositories/implementations/MockUsersRepository';

const mockUsersRepository = new MockUsersRepository();

const createUserUseCase = new CreateUserUseCase(
	mockUsersRepository
);

const createUserController = new CreateUserController(
	createUserUseCase
);

export { createUserUseCase, createUserController };