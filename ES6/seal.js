const employee = {
    name: 'Raja Sikdar',
    designation: 'QA',
    salary: 20000,
    experience: 3
}

Object.seal(employee)
employee.salary = employee.salary + 5000;

employee.location = 'Dhaka';
delete employee.experience;

console.log(employee);
