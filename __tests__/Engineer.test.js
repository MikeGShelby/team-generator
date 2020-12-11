const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('mike', '3', 'mikegshelby@gmail.com');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
});

test("returns engineer's name as a string", () => {
    const engineer = new Engineer('mike', '3', 'mikegshelby@gmail.com', 'engineer', 'mikegshelby');

    expect(engineer.getName()).toEqual(expect.any(String));
});

test("returns engineer's id as a string", () => {
    const engineer = new Engineer('mike', '3', 'mikegshelby@gmail.com', 'engineer', 'mikegshelby');

    expect(engineer.getID()).toEqual(expect.any(String));
});

test("returns engineer's email address as a string", () => {
    const engineer = new Engineer('mike', '3', 'mikegshelby@gmail.com', 'engineer', 'mikegshelby');

    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("returns engineer's role ('engineer')", () => {
    const engineer = new Engineer('mike', '3', 'mikegshelby@gmail.com', 'engineer', 'mikegshelby');

    expect(engineer.getRole()).toEqual(expect.any(String));
});

test("returns engineer's gitHub info", () => {
    const engineer = new Engineer('mike', '3', 'mikegshelby@gmail.com', 'manager', 'mikegshelby');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});