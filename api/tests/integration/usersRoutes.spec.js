const { request } = require("express");

describe('users endpoints', () => {
    let api;
    beforeEach(async () =>{
        await resetTestDb()
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

    it('returns a specific user by id', async () => {
        const res = await request(api).get('/users/1')
        expect(res.statusCode).toEqual(200);
        
    })
})
