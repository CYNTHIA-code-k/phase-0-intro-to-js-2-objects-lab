// Write your solution in this file!
let employee = {
  name: "Sam",
  streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Testing the functions
console.log("Original Employee:", employee);

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
console.log("Updated Employee (non-destructive):", updatedEmployee);
console.log("Original Employee (unchanged):", employee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
console.log("Employee After Destructive Update:", employee);

const employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
console.log("Employee Without Name (non-destructive):", employeeWithoutName);
console.log("Original Employee (unchanged):", employee);

destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee After Destructive Delete:", employee);

