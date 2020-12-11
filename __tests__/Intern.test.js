const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('mike', '3', 'mikegshelby@gmail.com');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
});

test("returns intern's name as a string", () => {
    const intern = new Intern('mike', '3', 'mikegshelby@gmail.com', 'intern', 'UH');

    expect(intern.getName()).toEqual(expect.any(String));
});

test("returns intern's id as a string", () => {
    const intern = new Intern('mike', '3', 'mikegshelby@gmail.com', 'intern', 'UH');

    expect(intern.getID()).toEqual(expect.any(String));
});

test("returns intern's email address as a string", () => {
    const intern = new Intern('mike', '3', 'mikegshelby@gmail.com', 'intern', 'UH');

    expect(intern.getEmail()).toEqual(expect.any(String));
});

test("returns intern's role ('intern')", () => {
    const intern = new Intern('mike', '3', 'mikegshelby@gmail.com', 'intern', 'UH');

    expect(intern.getRole()).toEqual(expect.any(String));
});

test("returns intern's school", () => {
    const intern = new Intern('mike', '3', 'mikegshelby@gmail.com', 'intern', 'UH');

    expect(intern.getSchool()).toEqual(expect.any(String));
});