const employee = {
    name: 'Raja Sikdar',
    designation: 'QA',
    salary: 20000,
    experience: 3
}
Object.freeze(employee)
delete employee.experience;
employee.salary = employee.salary + 5000;
employee.location = 'Dhaka';
console.log(employee);
