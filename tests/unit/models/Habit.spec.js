//
// ─── JEST UNIT TESTS: HABIT ─────────────────────────────────────────────────────
//
// Description: Test the Habit model.
//
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const User = require('../../../models/user');
const Habit = require('../../../models/habit');
const pg = require('pg');
const db = require('../../../dbConfig/init');

//
// ─── SETUP MOCKS ────────────────────────────────────────────────────────────────
//

jest.mock('pg');

// ────────────────────────────────────────────────────────────────────────────────


describe('Habit', () => {
	beforeEach(() => { jest.clearAllMocks(); });

	afterAll(() => { jest.resetAllMocks(); });

	describe('all', () => {
		test('it resovles with an array of habits on a successful DB query.', async () => {
			jest.spyOn(db, 'query')
				.mockResolvedValue({ rows: [{}, {}, {}, {}, {}, {}] });
			const result = await Habit.all;
			expect(result).toHaveLength(6);
		});
	});
	
	describe('destroy', () => {
		test('it resolves with a message on a successful db query', async () => {
			jest.spyOn(db, 'query')
				.mockResolvedValueOnce({ id: 1 });
			let testHabit = new Habit({ id: 1, name: 'Cycling' });
			const result = await testHabit.destroy();
			expect(result).toBe('Habit 1 deleted!');
		});
	});

	describe('getById', () => {
		test('it resolves with author on successful db query', async () => {
			let testHabit = new Habit({ id: 1, name: 'Cycling' });
			jest.spyOn(db, 'query')
				.mockResolvedValueOnce({rows: [testHabit] });
			const result = await Habit.getById(1);
			expect(result).toBeInstanceOf(Habit);
		});
	});

	describe('create', () => {
		test('it resolves with a new habit on a successful db query', async () => {
			let habitData = { id: 1, name: 'Cycling', frequency: 1, time: 13, comment: '', isComplete: false, user_id: 1 };			jest.spyOn(db, 'query')
				.mockResolvedValueOnce({ rows: [ habitData ] });
			const result = await Habit.create('Cycling', 2, 12,'test',false);
			expect(result).toBeInstanceOf(Habit);
		});
	});
});