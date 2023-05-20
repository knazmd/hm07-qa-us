// eslint-disable-next-line no-undef
const config = require('../config');


test('Should be 200 status code for getting 1 kit products list', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
        // Assigning the actual response status to the actualStatus variable
        actualStatusCode = response.status;
    } catch (error) {
        console.error(error);
    }
    // Checking that the actual status is 200
    expect(actualStatusCode).toBe(200);
}); 

test('Body should contain For picnic', async() => {
    let actualResponseBody;
    try{
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);

    }
    expect(actualResponseBody.name).toBe("For picnic");
});