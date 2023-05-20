// eslint-disable-next-line no-undef

const config = require('../config');

test('Status code should be 404', async () => {

  let actualStatusCode;

  try {

    const response = await fetch(`${config.API_URL}/api/v1/orders/1`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    actualStatusCode = response.status;

  } catch (error) {
    console.error(error);
  }

  expect(actualStatusCode).toBe(404);

});


test('Status body should contain false', async () => {

	let isDeleted = false;
  
	try {
	  const response = await fetch(`${config.API_URL}/api/v1/orders/1`, {
		method: 'DELETE',
	  });
  
	  isDeleted = response.ok;
  
	} catch (error) {
	  console.error(error);
	}
  
	expect(isDeleted).toBe(false);
  });
  