const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('mike', '3', 'mikegshelby@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));


});

test("returns employee's name as a string", () => {
    const employee = new Employee('mike');

    expect(employee.getName()).toEqual(expect.any(String));
});

test("returns employee's id as a number", () => {
    const employee = new Employee('mike', '3');

    expect(employee.getID()).toEqual(expect.any(String));
});

test("returns employee's email address as a string", () => {
    const employee = new Employee('mike', '3', 'mikegshelby@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("returns employee's role ('Employee')", () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual(expect.any(String));
});





