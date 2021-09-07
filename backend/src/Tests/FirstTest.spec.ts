import { User } from '@models/User';

it('should pass because 1+1 = 2', () => {
	expect(1+1).toBe(2);
});

test('if user.name receives the correct name', () => {
	const user = new User('Teste', 'teste@gmail.com');
	expect(user.name).toEqual('Teste');
	expect(user.email).toEqual('teste@gmail.com')
});