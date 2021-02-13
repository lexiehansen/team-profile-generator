const Engineer = require("../lib/Engineer");

test("set github", () => {
  const testValue = "lexiehansen";
  const member = new Engineer("lexie", 1, "lexie@test.com", testValue);
  expect(member.github).toBe(testValue);
});

test("get role", () => {
  const testValue = "Engineer";
  const member = new Engineer("lexie", 1, "lexie@test.com", "lexiehansen");
  expect(member.getRole()).toBe(testValue);
});

test("get github", () => {
  const testValue = "lexiehansen";
  const member = new Engineer("lexie", 1, "lexie@test.com", testValue);
  expect(member.getGithub()).toBe(testValue);
});