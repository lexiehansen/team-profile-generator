const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

test("create new employee", () => {
    const member = new Employee();
    expect(typeof(member)).toBe("object");
});

test("set employee name", () => {
    const name = "lexie";
    const member = new Employee(name);
    expect(member.name).toBe(name);
});

test("set id", () => {
    const testValue = 1;
    const member = new Employee("lexie", testValue);
    expect(member.id).toBe(testValue)
});

test("set email", () => {
    const testValue = "lexie@test.com"
    const member = new Employee("lexie", 1, testValue);
    expect(member.email).toBe(testValue);
});

test("get employee name", () => {
    const testValue = "lexie ";
    const member = new Employee(testValue);
    expect(member.getName()).toBe(testValue);
});

test("get id", () => {
    const testValue = 1;
    const member = new Employee("lexie", testValue);
    expect(member.getId()).toBe(testValue);
});

test("get email", () => {
    const testValue = "lexie@test.com";
    const member = new Employee("lexie", 1, testValue);
    expect(member.getEmail()).toBe(testValue);
});

test("get role", () => {
    const testValue = "Employee";
    const member = new Employee("lexie", 1, "lexie@test.com");
    expect(member.getRole()).toBe(testValue);
});