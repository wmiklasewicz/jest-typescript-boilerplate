## Typescript Jest API tests boilerplate with reporting and examples for jest-each

### How to use

#### API Tests
API tests are stored under `/api` folder, there are written with usage of *Jest test framework*  https://jestjs.io/ and additionally integrated with *Jest-each*, so you can run multiple test scenarios with one code base.

# Test reporting
Test reports can be generated e.g. in that way: `jest api/**/*.test.ts --config jest.config.js --verbose --json --outputFile=reports/master-report.json`, there are created with usage *jest-html-reporters*, to increate visibility od debug info, add extra message to your tests e.g.

`      await addMsg({
        message: `Test result: ${result}`,
      });`

**Example report view**
![Rreport](/resources/report.png "Report")
