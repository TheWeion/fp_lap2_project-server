describe('users endpoints', () => {
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

    it('returns a list of all the users in the database', async () => {
        const res = await request(api).get('/users')
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
    });

    it('returns a specific user based on id', async () => {
        const res = await request(api).get('/users/1')
        expect(res.statusCode).toEqual(200);
        expect(res.body.username).toEqual('Test User 1');        
    });

    it('should create a new user', () => {
        let newUser = {
            username: 'Test New User',
            email: 'newuser@gmail.com',
            password_digest: 'june2022'
        }
        request(api)
        .post('/users')
        .send(newUser)
        .set('Accept', /application\/json/)
        .expect(201)
        .expect({ id: 3, ...newUser});

        const updatedUsers = async () => {
            await request(api).get('/users');
            expect(updatedUsers.length).toEqual(3);
        }
    }); 

    it('should delete a user', async () => {
        const res = await request(api).delete('/users/2')
        expect(res.statusCode).toEqual(204)

        const users = await request(api).get('/users')
        expect(users.body.length).toEqual(1);
    });
});
