# Sprint 7 project("Introduction to JavaScript") Alex Kraus

Project Description:

The project involves writing tests for the Urban Grocers server's GET, POST, PUT, and DELETE requests. The tasks include selecting endpoints from the server's documentation and writing tests to check the response status code and validate the response body for each request type. The project utilizes JavaScript and Git/GitHub for version control. A README.md file is also required, which should provide an overview of the project, describe the technologies and techniques used, and include instructions on running the tests.
 
Technologies:

1.JavaScript: We wrote JavaScript code to implement the tests for GET, POST, PUT, and DELETE requests.
2. Git: We used the Git version control system to clone the project repository, make commits, and push your changes to GitHub.
3. npm: We used npm (Node Package Manager) to install project dependencies and run scripts.

Techniques:

1. API Testing: We wrote tests to validate the behavior of different API endpoints. This includes checking the response status code and parsing the response to verify that it contains the expected data.
2. Test-Driven Development (TDD): We followed a test-driven approach by writing tests before implementing the actual functionality. This helps ensure that our code meets the desired requirements and catches any issues early on.

To run the tests for the project, follow the instructions below:

1. Make sure you have Node.js installed on your computer. You can download it from the official Node.js website: https://nodejs.org
2. Clone the repository to your local computer using the following command in your terminal or command prompt: git clone https://github.com/username/hm07-qa-us.git 
Replace username with your GitHub username.
3. Change your current directory to the project folder: cd hm07-qa-us
4. Install the project dependencies by running the following command: npm install
5. Update the API URL in the config.js file. Replace the placeholder URL with the actual URL generated after launching the Urban Grocers server.
6. Now you can run the tests for each task. Each task has a corresponding test file in the tests folder. To run the tests for a specific task, use the following command:
npm jest tests/XHandlers.test.js
Replace X with the query method you want to test (get, post, put and delete).

For example, to run the tests for method GET, use the following command: npm jest tests/getHandlers.test.js
7. The test results will be displayed in the console, indicating whether the tests passed or failed. Additionally, you can check the detailed output and assertions in the console logs.
8. Repeat step 6 for each task, running the corresponding test file.
