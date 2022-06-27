const request = require("supertest");
const app = require("../../api/server");

// beforeAll(() => {
    // mongoDB.connect();
// });

// afterAll((done) => {
    // mongoDB.disconnect(done);
// });

describe("Test paths", () => {

    test("It should response the GET method", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });

});

describe("Send register user data", () => {

    test("It should response the GET method", async () => {
      const response = await request(app).post("/register")
      .send({email: "email@gmail.com", username: "test", password: "pass"});
      expect(response.statusCode).toBe(200);
    });

});