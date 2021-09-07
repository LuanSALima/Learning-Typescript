import { IUsersRepository } from '@Repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { User } from '@Models/User';

export class CreateUserUseCase {
	constructor(
		private usersRepository: IUsersRepository
	) {}

	//Execute the CreateUser receiving the CreateUserDTO
	async execute(data: ICreateUserRequestDTO) {
		//Check if the has a user with that email
		const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

		if(userAlreadyExists) {
			throw new Error('User already exists');
		}

		const user = new User(data);

		await this.usersRepository.save(user);
	}
}