// eslint-disable-next-line no-undef
const config = require('../config');

test('Status code should be 200', async () => {
    let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/1`, {
			method: 'DELETE',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});



test('Status body should contain true)', async () => {
    let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/1`, {
			method: 'DELETE',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe("true");
});
