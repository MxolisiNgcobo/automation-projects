# Automation Testing - api-tests 

## JavaScript API Automation Test Framework & Environment Setup - May 2022

### Requirements

1. IDE : VS code or any other
2. Libraries / Frameworks : Node JS and NPM, SuperTest, Mocha, Chai, Babel (ES6+)
3. Reporting : TestRail 
4. Versioning : GIT

### Guides / Video Resources

1. Installation / setup video : (https://www.youtube.com/watch?v=7cDRqi2G6Nw)
2. GIT (https://github.com/git-guides/)
3. Testrail (https://www.gurock.com/testrail/videos/introduction-projects)
4. NodeJS: https://nodejs.org/en/download/
5. SuperTest: https://www.npmjs.com/package/supertest
6. Mocha JS: https://mochajs.org/
7. Chai JS: https://www.chaijs.com/
8. Babel: https://babeljs.io/
9. API Testing Site - https://gorest.co.in/

#### Installation

Clone Repo
ssh : git clone git@bitbucket.org:wyzetalk/automation-tests.git
or https : git clone https://mxolisingcobo@bitbucket.org/wyzetalk/automation-tests.git 

#### To Install Packages

1. Open up terminal
2. Install git (https://github.com/git-guides/install-git)
3. Check if npm is installed by running command: npm -v , if not then install it from (https://nodejs.org/en/download/)
4. Check if node js is installed by running command: node -v , if not then install it : (https://nodejs.org/en/download/)
5. Initialise project by running command: npm init -y to create a package.json
6. npm install supertest, mocha, chai & babel libraries by running command: npm i --save-dev supertest mocha chai @babel/cli @babel/core @babel/node @babel/register @babel/preset-env
7. Confirm packages have installed successfully in vscode > package.json under devDependencies
8. Replace "test": "echo \"Error: no test specified\" && exit 1" with "test": "mocha" under scripts still in package.json (add the following if tests fail due to timeouts :     "test": "mocha test  --timeout 10000"
)
9. Babel/ES6 configuration : Create a .babelrc file under api-tests folder and add:  {"presets": ["@babel/preset-env"]}
10. mocharc configuration : Create a .mocharc.yaml file under api-tests folder and add:  require: '@babel/register'
11. cd to location /automation-tests/api-tests/src/smart-recruiters/test/ and run mocha command to execute your tests as follows: npm test
12. This should execute all tests inside the test folder and give you results. Comment out all other tests if you want to run a specific test.


### Reporting

#### TestRail installation

Ask Ntuthuko or Mxolisi for testrail login info

Run following command to install:

npm install --save testcafe-reporter-html-testrail@2.0.8

Use environment variables to configure your TestRail credentials. Check on guide how to set the env variable up.
https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html

#### Enviroment varibales installation

•   TESTRAIL_ENABLE: This variable accepts a boolean value (`true` or false) to tell the reporter plugin to send your test run results to TestRail. 
    By default, it's set to false, which is useful to avoid publishing your test results when running tests locally. Usually, this variable is set to true in a continuous integration environment.

•	TESTRAIL_HOST: This variable, you need to set up the host of your TestRail instance. 
    Wyzetalk is hosted at https://wyzetalktesting.testrail.io.          
    Keep in mind that it's important to include the full URL, including the protocol (https://, in this example).

•	TESTRAIL_USER: Here, you'll specify the username of a TestRail account with access to your project. 
    When the reporter plugin sends the test run results to TestRail, they'll get created under the account specified here.

•	TESTRAIL_PASS: You can use either the TestRail account password for the user specified in the previous environment variable.
    Or use an API key created for the account. It's recommended to use an API key since you can limit access to your TestRail account and easily revoke it.

•	PROJECT_NAME: This variable indicates the TestRail project name containing the test cases for your automated test suite.

•	PLAN_NAME: TestRail uses the concept of "Test Plans" to manage multiple test runs if you need to run your tests on different configurations. 
    This variable allows you to specify a plan name. 
    If you don't set a plan name, it will publish your test results under the TestAutomation_1 test plan by default.

#### Formatting your TestCafe test descriptions

To link a specific TestCafe test case to a TestRail test case, the reporter plugin requires a specific formatting of the test name in TestCafe:

test("<Test Type> | <Test Name> | <TestRail Test Case ID>", async t => {
  // Your test code goes 
});

#### Sending results to TestRail

With the necessary environment variables set and your test names adequately formatted, all that's left is to run your tests and have the results sent automatically to TestRail. The only thing you need to do is to specify the reporter when executing the TestCafe test suite. You can easily do this from the command line:

testcafe chrome *path to file* --reporter html-testrail

#### Succesfull posting output:

  Passed 0 POST /ussd-test - Regression Test | add question | C3
  1 Passed (Duration: 14s)

  ------------------------------------------------------

  The file was saved on TestRail > Automation > Reporting
  ------------------------------------------------------
  Publishing the result to testrail...
  Project name(id)   CMS(2)
  New Plan is created
  Plan name(id)   Forms(24)
  Suite name(id)   Master(2)
  ------------------------------------------------------
  Run added successfully.
  Run name   (Confirm report template)