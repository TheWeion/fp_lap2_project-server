const habitsController = require('../../../../src/controllers/habits');
const Habit = require('../../../../src/models/habit');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }));
const mockRes = { status: mockStatus };

describe('Habits Controller', () => {
	beforeEach(() => { jest.clearAllMocks(); });

	afterAll(() => { jest.resetAllMocks(); });

	describe('index', () => {
		test('should return a list of habits with a 200 status code', async () => {
			jest.spyOn(Habit, 'all', 'get')
				.mockResolvedValue(['habit1', 'habit2']);
			await habitsController.index(null, mockRes);
			expect(mockStatus).toHaveBeenCalledWith(200);
			expect(mockJson).toHaveBeenCalledWith(['habit1', 'habit2']);
		});
	});

	describe('show', () => {
		test('should return a habit with a 200 status code', async () => {
			let testHabit = { 
				id: 1, 
				name: 'test habit', 
				frequency: 3,
				time: null, 
				isComplete: false,
				created_at: '2020-01-01', 
			};
			jest.spyOn(Habit, 'getById', 'get')
				.mockResolvedValue(new Habit(testHabit));

			const mockReq = { params: { id: 1 } };
			await habitsController.show(mockReq, mockRes);
			expect(mockStatus).toHaveBeenCalledWith(200);
			expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
		});
	});
});
