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
		test('should return a list of users with a 200 status code', async () => {
			jest.spyOn(User, 'all', 'get')
				.mockResolvedValue(['user1', 'user2']);
			await usersController.index(null, mockRes);
			expect(mockStatus).toHaveBeenCalledWith(200);
			expect(mockJson).toHaveBeenCalledWith(['user1', 'user2']);
		});
	});

	describe('show', () => {
		test('should return a user with a 200 status code', async () => {
			let testUser = { 
				id: 1, 
				username: 'test user', 
				email: 'abc123@example.com', 
				password_digest: 'password'
			};
			jest.spyOn(User, 'getById', 'get')
				.mockResolvedValue(new User(testUser));

			const mockReq = { params: { id: 1 } };
			await usersController.show(mockReq, mockRes);
			expect(mockStatus).toHaveBeenCalledWith(200);
			expect(mockJson).toHaveBeenCalledWith(new User(testUser));
		});
	});

	describe('create', () => {
		test('should return a user with a 201 status code', async () => {
			let testUser = { 
				id: 2, 
				username: 'test user', 
				email: 'abc123@foo.com', 
				password_digest: 'password'
			};

			jest.spyOn(User, 'create')
				.mockResolvedValue(new User(testUser));
			const mockReq = { body: testUser };
			await usersController.create(mockReq, mockRes);
			expect(mockStatus).toHaveBeenCalledWith(201);
			expect(mockJson).toHaveBeenCalledWith(new User(testUser));
		});
	});
});