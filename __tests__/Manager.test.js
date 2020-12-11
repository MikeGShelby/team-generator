const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('mike', '3', 'mikegshelby@gmail.com');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
});

test("returns manager's name as a string", () => {
    const manager = new Manager('mike', '3', 'mikegshelby@gmail.com', 'manager', 1);

    expect(manager.getName()).toEqual(expect.any(String));
});

test("returns manager's id as a string", () => {
    const manager = new Manager('mike', '3', 'mikegshelby@gmail.com', 'manager', 1);

    expect(manager.getID()).toEqual(expect.any(String));
});

test("returns manager's email address as a string", () => {
    const manager = new Manager('mike', '3', 'mikegshelby@gmail.com', 'manager', 1);

    expect(manager.getEmail()).toEqual(expect.any(String));
});

test("returns manager's role ('manager')", () => {
    const manager = new Manager('mike', '3', 'mikegshelby@gmail.com', 'manager', 1);

    expect(manager.getRole()).toEqual(expect.any(String));
});

test("returns manager's office number", () => {
    const manager = new Manager('mike', '3', 'mikegshelby@gmail.com', 'manager', 1);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});