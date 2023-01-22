import each from "jest-each";
const { addMsg } = require("jest-html-reporters/helper");

/**
 * @group examples
 */

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

describe("Regural test", () => {
  test("Example jest test", async () => {
    expect(100 + 100).toBe(200);
  });
});
