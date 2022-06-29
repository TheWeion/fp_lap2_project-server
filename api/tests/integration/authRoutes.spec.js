describe('auth endpoints', () => {
    let api;
    beforeEach(async () =>{
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(done => {
        console.log('Gracefully stopping test server')
        api.close(done)
    });

	it('should return a 401 status code when a user attempts to login with invalid credentials', async () => {
		const response = await request(api)
			.post('/login')
			.send({ username: 'invalid', password: 'password' });
		expect(response.status).toBe(401);
	});

	it('should return a 200 status code when a user attempts to login with valid credentials', async () => {
		const response = await request(api)
			.post('/login')
			.send({ username: 'Test User 1', password: 'qwerty' });
		expect(response.status).toBe(200);
	});

	it('should redirect to the login page', async () => {
		const response = await request(api)
			.get('/login');
		expect(response.status).toBe(200);
	});

	it('should redirect to the home page', async () => {
		const response = await request(api)
			.get('/');
		expect(response.status).toBe(200);
	});

	it('should redirect to the register page', async () => {
		const response = await request(api)
			.get('/register');
		expect(response.status).toBe(200);
	});
});
