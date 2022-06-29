//
// ─── JEST UNIT TESTS: USER ──────────────────────────────────────────────────────
//
// Description: Test the User model.
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

jest.mock('../../../models/habit');
jest.mock('pg');

// ────────────────────────────────────────────────────────────────────────────────

describe('User', () => {
	beforeEach(() => { jest.clearAllMocks(); });

	afterAll(() => { jest.resetAllMocks(); });

	describe('all', () => {
		test('it resolves with an array of users on a successful DB query.', async () => {
			jest.spyOn(db, 'query')
				.mockResolvedValue({ rows: [{}, {}, {}, {}, {}, {}] });
			const result = await User.all;
			expect(result).toHaveLength(6);
		});
	});

	describe('getById', () => {
		test('it resolves with a user on a successful db query', async () => {
			let testUser = new User({ id: 1, username: 'John' });
			jest.spyOn(db, 'query')
				.mockResolvedValueOnce({rows: [testUser] });
			const result = await User.getById(1);
			expect(result).toBeInstanceOf(User);
		})
	});

	describe('create', () => {
		test('it resolves with a new user on a successful db query', async () => {
			let testUser = { username: 'test user', email: 'abc123@foo.com', password_digest: 'password' };
			jest.spyOn(db, 'query')
				.mockResolvedValueOnce({ rows: [ { ...testUser, id: 1 }] });
			const result = await User.create(testUser);
			expect(result).toHaveProperty('id');
		});
	});
});