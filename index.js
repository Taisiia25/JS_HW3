// Exercise 1
console.log('Exercise 1')

//Создать функцию - конструктор, 
//которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;

//const employeeObj = new Emploee(employee);
  const thisValeriy = {
    id: 0,
    name: 'Valeriy',
    surname: 'Zhmishenko',
    salary: 1000, 
    workExperience: 10, 
    isPrivileges: true, 
    gender: 'male',
  }

// etc.

 function Employee (id, name, surname, salary, workExperience, isPrivileges, gender) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
}

const employeeObj1 = new Employee (0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');
console.log(employeeObj1);

// Exercise 2
console.log('Exercise 2')
//Добавить функции - конструктору метод (помним про prototype): 
// getFullName который вернет полное имя начиная с фамилии в виде строки

// employeeObj.getFullName() // 'Zhmishenko Valeriy';

Employee.prototype.getFullName = function() {
    return `${this.surname} ${this.name}`
}
console.log(employeeObj1.getFullName())


// Exercise 3
console.log('Exercise 3')

// Создать новый массив на основе emplyeeArr в котором будут содержаться те же обьекты, 
// но созданные функцией - конструктором Emploee. 
// Новый массив должен содержать имя emplyeeConstructArr.

// let createEmployesFromArr = (arr) => {
//     .... Your code
// };
// const emplyeeConstructArr = createEmployesFromArr(emplyeeArr) /// [{id: 0, name: 'Valeriy', surname: 'Zhmishenko', salary: 1000,  workExperience: 10,  isPrivileges: true, gender:'male' }]



// Створимо нову функцію-конструктор по Ex. 1, але на основі масиву emplyeeArr.
const Employee1 = function(employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname;
    this.salary = employee.salary;
    this.workExperience = employee.workExperience;
    this.isPrivileges = employee.isPrivileges;
    this.gender = employee.gender;
}

const employeeObj = new Employee1(emplyeeArr[0])
console.log(employeeObj);

//  Створимо новий масив emplyeeConstructArr відповідно Ex.3

let createEmployesFromArr = (arr) => {
    const emploeeList  = [];

    for (const employee of arr) {
        const newEmployee = new Employee1(employee);
        emploeeList.push(newEmployee);
    }

    return emploeeList;
}

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
console.log(emplyeeConstructArr); 


// Exercise 4
console.log('Exercise 4')

// Создать функцию которая вернет массив со всеми полными именами каждого employee, 
// содержащегося в emplyeeConstructArr;
Employee1.prototype.getFullName = function() {
    return `${this.surname} ${this.name}`
}
console.log(employeeObj.getFullName())

const getFullNamesFromArr = (arr) => {
    let fullNames = [];
    for (let n = 0; n < arr.length; n++) {
        const newNames = arr[n].getFullName()
        fullNames.push(newNames);
    }
    
    return fullNames;
    
}

const fullNames = getFullNamesFromArr(emplyeeConstructArr);
    
console.log(fullNames); 

// Exercise 5
console.log('Exercise 5')

// Создать функцию которая вернет среднее значение зарплаты всех employee

const getMiddleSalary = (arr) => {
    let sum = 0;
    for (let n = 0; n < arr.length; n++) {
        sum += arr[n].salary;
    }
    return sum / arr.length;
    
};

const result = getMiddleSalary(emplyeeConstructArr);
console.log(Math.round(result));