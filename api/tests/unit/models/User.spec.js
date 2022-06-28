//
// ─── JEST UNIT TESTS: USER ──────────────────────────────────────────────────────
//
// Description: Test the User model.
//
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const User = require('../models/user');
const Habit = require('../models/habit');
const pg = require('pg');
const db = require('../dbconfig/init');

//
// ─── SETUP MOCKS ────────────────────────────────────────────────────────────────
//

jest.mock('../models/habit');
jest.mock('pg');

// ────────────────────────────────────────────────────────────────────────────────

describe('User', () => {
	beforeEach(() => { jest.clearAllMocks(); });

	afterAll(() => { jest.resetAllMocks(); });

	describe('all', () => {
		test('it resolves with an array of users on a successful DB query.', async () => {
			jest.spyOn(db, 'query')
				.mockResolvedValue({ rows: [{}, {}, {}, {}, {}, {}] });
			const result = await User.all();
			expect(result).toHaveLength(6);
		});
	});

	describe('getById', () => {
		test('it resolves with a user on a successful db query', async () => {
			jest.spyOn(db, 'query')
				.mockResolvedValueOnce({ id: 1 });
			let testUser = new User({ id: 1, name: 'John' });
			const user = await testUser.getById();
			expect(user).toHaveProperty('id', 1);
			expect(user).toHaveProperty('name', 'John');
		}).timeout(5000);
	});
});