const employee = {
    name: 'Raja Sikdar',
    designation: 'QA',
    salary: 20000,
    experience: 3
}


for (const key in employee) {
    const value = employee[key];
    console.log(key, value);
}