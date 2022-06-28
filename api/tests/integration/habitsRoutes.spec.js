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

    it('should create a new habit', () => {
        let newHabit = {
            name: 'Spend time in nature', 
            frequency: 2, 
            time: 20, 
            comment: 'hug a tree', 
            isComplete: false
        }

        const res = request(api)
        .post('/habits')
        .send(newHabit)
        .set('Accept', /application\/json/)
        .expect(201)
        .expect({ id: 4, ...newHabit});
        
        const habits = async () => {
            await request(api).get('/habits')
            expect(habits.body.length).toEqual(4);
        }
    });

    it('should update a habit', () => {
        let updateHabit = {
            comment: 'try another recipe',
            isComplete: true
        }
        const res = request(api)
        .patch('/habits/2')
        .send(updateHabit)
        .expect(200)
        .expect({id: 2, ...updateHabit})
    });

    it('should delete a habit', async () => {
        const res = await request(api).delete('/habits/3')
        expect(res.statusCode).toEqual(204);

        const deletedHabit = await request(api).get('/habits/3')
        expect(deletedHabit.statusCode).toEqual(500)

        const habits = await request(api).get('/habits')
        expect(habits.body.length).toEqual(2);
    });
})
