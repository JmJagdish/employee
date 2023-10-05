const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter your name"],
        trim: true,
    },
    email: {
        type: String,
        require: [true, "Please enter your email"],
        trim: true,
    },
    date_of_join: {
        type: String,
        require: [true, "Please enter your date of joining"],
        trim: true,
    },
    date_of_birth: {
        type: String,
        require: [true, "Please enter your DOB"],
        trim: true,
    },
    salary: {
        type: String,
        require: [true, "Please enter your salary"],
        trim: true,
    }

})
const EmployeeModel = mongoose.model("Employee", employeeSchema);
module.exports = {
    EmployeeModel
}




// 1- Create API in nodejs
//   - Create employee (Name, email, Date of join, DOB, Salary)
// - Import bulk employee
// - export all the employee
// - Each employee salary we will add every month, so make salary table different to add.

// Tech stack - Nodejs, ReactJs, Mongo. 