// Write your solution in this file!
const employee = {
    name: "Jay",
    streetAddress: "4042 Denver CO" 
}

function updateEmployeeWithKeyAndValue(employee, key, value){
 const newEmployee= {...employee, [key]: value};
return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee
}

function deleteFromEmployeeByKey(employee, key){

    const newEmployee2= {...employee}
    delete newEmployee2[key];
    return newEmployee2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}


