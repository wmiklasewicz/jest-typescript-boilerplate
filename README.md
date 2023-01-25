## Typescript Jest API tests boilerplate with reporting and examples for jest-each

### Installation
 - git clone https://github.com/wmiklasewicz/jest-typescript-boilerplate.git
 - cd jest-typescript-boilerplate
 - npm run i

### Tech
jest-typescript-boilerplate uses a number of open source projects to work properly:

    node.js - evented I/O for the backend
    Jest - simple, flexible, fun javascript test framework
    jest-html-reporters - simple test reports for jest tests output
    jest-each - run multiple tests using the same code base.

And of course jest-typescript-boilerplate itself is open source with a public repository

#### API Tests
API tests are stored under `/api` folder, there are written with usage of *Jest test framework*  https://jestjs.io/, and additionally integrated with *Jest-each*, so you can run multiple test scenarios with one code base e.g.

        describe("Example test with jest-each usage", () => {
        each`
                desc                 | number1 | number2 | result  
                ${"test case 1"}     | ${1}    | ${1}    | ${2}                                                       
                ${"test case 2"}     | ${2}    | ${2}    | ${4}                                             
                ${"test case 3"}     | ${3}    | ${3}    | ${6}                                                                           
         `.test(
           "/user/admin/bank/{proxyOrgId}/user/status [$expStatusCode] :: $desc",
           async ({ number1, number2, result }) => {
           expect(number1 + number2).toEqual(result);
           await addMsg({
                message: `Test result: ${result}`,
           });
          }
         );
        });

# Test reporting
Test reports can be generated e.g. in that way: 
     ```jest api/**/*.test.ts --config jest.config.js --verbose --json --outputFile=reports/master-report.json```
    
there are created with the usage of *jest-html-reporters*, If you want to increase visibility about debug info, add extra message to your tests e.g.

      await addMsg({
        message: `Test result: ${result}`,
      });

**Example report view**

![Rreport](/resources/report.png "Report")
