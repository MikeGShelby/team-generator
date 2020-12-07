function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
};

Employee.prototype.getName = function() {
    return this.name;
};

Employee.prototype.getID = function() {
    return this.id;
};

Employee.prototype.getEmail = function() {
    return this.email;
};

Employee.prototype.getRole = function() {
    return 'Employee';
};


module.exports = Employee;