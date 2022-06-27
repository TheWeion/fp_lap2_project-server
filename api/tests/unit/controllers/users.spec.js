const usersController = require('../../../controllers/users');
const User = require('../../../models/user');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }));
const mockRes = { status: mockStatus };

describe('Users Controller', () => {
	beforeEach(() => { jest.clearAllMocks(); });

	afterAll(() => { jest.resetAllMocks(); });

	describe('index', () => {
		test('should return a list of users', async () => {
			jest.spyOn(User, 'all', 'get').mockImplementation(() => Promise.resolve([{ id: 1 }]));
		});
	}
});