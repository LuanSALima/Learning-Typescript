import { User } from '@Models/User';

it('should pass because 1+1 = 2', () => {
	expect(1+1).toBe(2);
});

test('if user.name receives the correct name', () => {
	const user = new User({
		name: 'Teste',
		email: 'teste@gmail.com',
		password: 'Teste1234'
	});
	expect(user.name).toEqual('Teste');
	expect(user.email).toEqual('teste@gmail.com')
	expect(user.password).toEqual('Teste1234')
});