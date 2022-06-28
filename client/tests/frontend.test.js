const request = require("supertest");
const app = require("../../api/server");

// beforeAll(() => {
    // mongoDB.connect();
// });

// afterAll((done) => {
    // mongoDB.disconnect(done);
// });

describe("Test paths", () => {
    //ensure that server is working
    test("It should response the GET method", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });

});

describe("Send register user data", () => {

    test("It should response the GET method", async () => {
      const testPayload = {username: "user2",  email: "user2@gamil.com", password:"pass2"};

      const response = request(app).post("/users").send(testPayload).expect(201); 
    });

});

describe("Send login user data", () => {

    test("It should response the GET method", async () => {
      const testPayload = {username: "Ben12", password: "ghi789"}

      request(app).post("/users").send(testPayload).expect(200);
    });

});