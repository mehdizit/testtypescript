"use strict";
exports.__esModule = true;
var teacher3 = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false
};
console.log(teacher3);
exports.printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + ". " + lastName;
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
