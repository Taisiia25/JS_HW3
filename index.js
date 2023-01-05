// Exercise 1
console.log('Exercise 1')

//Создать функцию - конструктор, 
//которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;


const Employee = function(employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname;
    this.salary = employee.salary;
    this.workExperience = employee.workExperience;
    this.isPrivileges = employee.isPrivileges;
    this.gender = employee.gender;
}

const employeeObj = new Employee(emplyeeArr[0])
console.log(employeeObj);

// Exercise 2
console.log('Exercise 2')
//Добавить функции - конструктору метод (помним про prototype): 
// getFullName который вернет полное имя начиная с фамилии в виде строки

Employee.prototype.getFullName = function() {
    return `${this.surname} ${this.name}`
}
console.log(employeeObj.getFullName())


// Exercise 3
console.log('Exercise 3')

// Создать новый массив на основе emplyeeArr в котором будут содержаться те же обьекты, 
// но созданные функцией - конструктором Emploee. 
// Новый массив должен содержать имя emplyeeConstructArr.

// let createEmployesFromArr = (arr) => {
//     .... Your code
// };
// const emplyeeConstructArr = createEmployesFromArr(emplyeeArr) /// [{id: 0, name: 'Valeriy', surname: 'Zhmishenko', salary: 1000,  workExperience: 10,  isPrivileges: true, gender:'male' }]


let createEmployesFromArr = (arr) => {
    const emploeeList  = [];

    for (const employee of arr) {
        const newEmployee = new Employee(employee);
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

// Exercise 6
console.log('Exercise 6')

// Создать функцию которая выберет наугад работника из массива emplyeeConstructArr. 
// Вы должны учитывать в функции длинну массива, так как если работников 7, а рандомное число будет равно больше 7, 
// то результат будет undefined. Вы можете использовать обьявленную функцию в сомой же себе. 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomEmployee = (arr) => {
    return arr[getRandomInt(0, arr.length)];
}

console.log(getRandomEmployee(emplyeeConstructArr));
  
