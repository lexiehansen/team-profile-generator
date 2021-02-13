const Intern = require("../lib/Intern");

test("set school", () => {
  const testValue = "UofU";
  const member = new Intern("lexie", 1, "lexie@test.com", testValue);
  expect(member.school).toBe(testValue);
});

test("get role", () => {
  const testValue = "Intern";
  const member = new Intern("lexie", 1, "lexie@test.com", "UofU");
  expect(member.getRole()).toBe(testValue);
});

test("get school", () => {
  const testValue = "UofU";
  const member = new Intern("lexie", 1, "lexie@test.com", testValue);
  expect(member.getSchool()).toBe(testValue);
});