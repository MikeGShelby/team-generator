class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName = function() {
        return this.name;
    };

    getID = function() {
        return this.id;
    };

    getEmail = function() {
        return this.email;
    };

    getRole = function(role = 'Employee') {
        return this.role;
    };


}


module.exports = Employee;