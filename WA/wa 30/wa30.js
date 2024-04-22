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

// JSON for company
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

// Adding new employee Anna
const anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
};

employees.push(anna);
company.employees = employees;

// Calculate total salary
let totalSalary = 0;
employees.forEach(employee => {
    totalSalary += employee.salary;
});
console.log("Total salary for all employees:", totalSalary);

// Function to give raise
function giveRaise(employee) {
    if (employee.raiseEligible) {
        employee.salary *= 1.10; // Increase salary by 10%
        employee.raiseEligible = false; // Set raise eligibility to false
    }
}

// Give raise to eligible employees
employees.forEach(employee => {
    giveRaise(employee);
});
console.log("Employees after raise:", employees);

// Array of employees working from home
const workingFromHome = ['Anna', 'Sam'];

// Update wfh property for each employee
employees.forEach(employee => {
    if (workingFromHome.includes(employee.firstName)) {
        employee.wfh = true;
    } else {
        employee.wfh = false;
    }
});
console.log("Employees after updating wfh status:", employees);
