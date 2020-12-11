const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);

        this.school = school;
    }

    getSchool = function() {
        return this.school;
    }
}

module.exports = Intern;