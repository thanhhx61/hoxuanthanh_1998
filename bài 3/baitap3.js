class Employee{
    name;
    age;
    address;
    salary;
    totalWorkingHours;
    constructor(name,age,address,salary){
        this.name = name;
        this.age = age;
        this.address = address;
        this.salary = salary;
    }
    inputWokingHours(){
        this.totalWorkingHours = +prompt("Hãy nhập số giờ làm việc")
    } 
    printInfo(){
        document.write(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}, Số giờ làm việc:${this.totalWorkingHours} `);  
    }
    calculatorBonus(){
        let bonus = 0;
        let hours = this.totalWorkingHours;
        if (hours >= 200){
            bonus = this.salary * 0.2;
        }
        else {
            if (hours >= 100){
                bonus = this.salary * 0.1
            }
        }
        document.write(``)
    }
}


let name1 = new Employee("name1",30,"45 nguyễn trãi",5000000);
let name2 = new Employee("name2",20,"10 Trần hưng đạo", 4500000);
let name3 = new Employee("name3",25,"45 Lê nguyễn công trứ", 3000000);

name1.inputWokingHours();
name1.printInfo();
name1.calculatorBonus();
name2.inputWokingHours();
name2.printInfo();
name2.calculatorBonus();
name3.inputWokingHours();
name3.printInfo();
name3.calculatorBonus();