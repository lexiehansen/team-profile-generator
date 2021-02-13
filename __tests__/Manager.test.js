const Manager = require("../lib/Manager");

test("set office number", () => {
  const testValue = 1;
  const member = new Manager("lexie", 1, "lexie@test.com", testValue);
  expect(member.officeNumber).toBe(testValue);
});

test("get role", () => {
  const testValue = "Manager";
  const member = new Manager("lexie", 1, "lexie@test.com", 1);
  expect(member.getRole()).toBe(testValue);
});

test("get office number", () => {
  const testValue = 1;
  const member = new Manager("lexie", 1, "lexie@test.com", testValue);
  expect(member.getOfficeNumber()).toBe(testValue);
});