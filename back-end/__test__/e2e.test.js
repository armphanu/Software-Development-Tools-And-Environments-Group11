
const request = require("supertest");

const baseUrl = 'http://159.223.45.216:3333/';

describe('Todos endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.get('allpost');
		expect(response.statusCode).toBe(200);
	});
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.get('post/620739c23436e1d3be63c7aa');
		expect(response.statusCode).toBe(200);
	});
});