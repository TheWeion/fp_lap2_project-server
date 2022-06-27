const User = require('../models/user');
const Habit = require('../models/habit');
const pg = require('pg');

jest.mock('../models/user');
jest.mock('pg');

const db = require('../dbconfig/init');

describe('Habit', () => {
	beforeEach(() => { jest.clearAllMocks(); });

	afterAll(() => { jest.resetAllMocks(); });

	describe('all', () => {
		test('it resovles with an array of habits on a successful DB query.', async () => {
			jest.spyOn(db, 'query')
				.mockResolvedValue({ rows: [{}, {}, {}, {}, {}, {}] });
			const result = await Habit.all();
			expect(result).toEqual([{}, {}, {}, {}, {}, {}]);
		})
	})
});