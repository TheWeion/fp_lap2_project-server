//
// ─── JEST UNIT TESTS: HABIT ─────────────────────────────────────────────────────
//
// Description: Test the Habit model.
//
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const User = require('../models/user');
const Habit = require('../models/habit');
const pg = require('pg');

//
// ─── SETUP MOCKS ────────────────────────────────────────────────────────────────
//

jest.mock('../models/user');
jest.mock('pg');

//
// ─── GLOBALS ────────────────────────────────────────────────────────────────────
//

const db = require('../dbconfig/init');

// ────────────────────────────────────────────────────────────────────────────────

describe('Habit', () => {
	beforeEach(() => { jest.clearAllMocks(); });

	afterAll(() => { jest.resetAllMocks(); });

	describe('all', () => {
		test('it resovles with an array of habits on a successful DB query.', async () => {
			jest.spyOn(db, 'query')
				.mockResolvedValue({ rows: [{}, {}, {}, {}, {}, {}] });
			const result = await Habit.all();
			expect(result).toHaveLength(6);
		});
	});

	describe('users', () => {
		test('it resolves with habits on a successful db query') , async () => {
			jest.spyOn(db, 'query')
				.mockResolvedValueOnce({ rows: [{id: 1, username: 'John'}, {id: 2, username: 'Terry'}] });
			let testHabit = new User({ id: 1, name: 'Cycling' });
			const users = await testHabit.users();
			expect(users).toHaveLength(2);
			expect(users[0]).toHaveProperty('path', 'users/1');
		};
	});
	
	describe('destroy', () => {
		test('it resolves with a message on a successful db query', async () => {
			jest.spyOn(db, 'query')
				.mockResolvedValueOnce({ id: 1 });
			let testHabit = new Habit({ id: 1, name: 'Cycling' });
			const result = await testHabit.destroy();
			expect(result).toEqual('Habit deleted');
		});
	});

	describe('getById', () => {
		test('it resolves with author on successful db query'), async () => {
			jest.spyOn(db, 'query')
				.mockResolvedValueOnce({ id: 1, name: 'Cycling' });
			let testHabit = new Habit({ id: 1, name: 'Cycling' });
			const result = await testHabit.getById();
			expect(result).toHaveProperty('id', 1);
			expect(result).toHaveProperty('name', 'Cycling');
		};
	});
	
	describe('create', () => {
		test('it resolves with a new habit on successful db query', async () => {
			let habitData = { id: 1, name: 'Cycling' };
			jest.spyOn(db, 'query')
				.mockResolvedValueOnce({ rows: [habitData] });
			const result = await Habit.create('Cycling');
			expect(result).toBeInstanceOf(Habit);
		});
	});
});