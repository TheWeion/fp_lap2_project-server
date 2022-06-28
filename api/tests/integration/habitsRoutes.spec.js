describe ('habits endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });
    
    beforeAll(async ()=> {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(done => {
        console.log('Gracefully stopping test server')
        api.close(done)
    });

    it('should return a list of all habits in database',  async () => {
        const res = await request(api).get('/habits')
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(3);
    });

    it('should create a new habit', async () => {
        const res = await request(api)
        .post('/habits')
        .send({
            name: 'Spend time in nature', 
            frequency: 2, 
            time: 20, 
            comment: 'hug a tree', 
            isComplete: true, 
            user_id: 2
        })
        expect(res.statusCode).toEqual(201);
        const habits = await request(api).get('/habits')
        expect(habits.body.length).toEqual(4);
    });

    it('should update a habit', async () => {
        const res = await request(api)
        .patch('/habits/2')
        .send({
            name:'Eat healthy',
            frequency: 2,
            time: 14,
            comment: 'try another recipe',
            isComplete: true,
            user_id: 1
        })

        expect(res.statusCode).toEqual(200);
        // expect(res.body).toHaveProperty('id');
    });

    it('should delete a habit', async () => {
        const res = await request(api).delete('habits/3')
        expect(res.statusCode).toEqual(204);
        expect(res.body.length).toEqual(2);

        const habits = await request(api).get('/habits/3')
        expect(habits.statusCode).toEqual(404);
        expect(habits.body).toHaveProperty({message: err.message})
    });
})
