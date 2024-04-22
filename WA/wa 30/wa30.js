//Q1
const employees = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    }
];

//Q2
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

//Q3
const anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
};

employees.push(anna);
company.employees = employees;

//Q4
let totalSalary = 0;
employees.forEach(employee => {
    totalSalary += employee.salary;
});
console.log("Total salary for all employees:", totalSalary);

//Q5
function giveRaise(employee) {
    if (employee.raiseEligible) {
        employee.salary *= 1.10;
        employee.raiseEligible = false;
    }
}

employees.forEach(employee => {
    giveRaise(employee);
});
console.log("Employees after raise:", employees);

//Q6
const workingFromHome = ['Anna', 'Sam'];

employees.forEach(employee => {
    if (workingFromHome.includes(employee.firstName)) {
        employee.wfh = true;
    } else {
        employee.wfh = false;
    }
});

console.log("Employees after updating wfh status:", employees);
