class Person{
    constructor(name="tom", age=20, energy=100) {
        this.name = name;
        this.age = age;
            this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -=  10;
    }
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
        
    sleep() {
        super.sleep;
    }
    doSomethingFun() {
        super.doSomethingFun;
    }
    goToWork(){
        this.xp += 10;
}

}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker("Bob", 21, 100, 0, 10);
    intern.goToWork();
    return intern;

} 


// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
    

    
} 
// Task 1: Code a Person classclass Person {    constructor(name = "Tom", age = 20, energy = 100) {        this.name = name;        this.age = age;        this.energy = energy;    }        sleep(){        if (this.energy < 0) {            this.energy += 20;        } else if (this.energy == 100){            this.energy = this.doSomethingFun();        }    }    doSomethingFun(){        this.energy -= 20;    }}// Task 2: Code a Worker classclass Worker extends Person {    constructor(xp = 0, hourlyWage = 10, name, age, energy) {        super(name, age, energy);        this.xp = xp;        this.hourlyWage = hourlyWage;    }    goToWork() {        if (this.xp == 0) {            this.xp += 10;        }    }}// Task 3: Code an intern object, run methodsfunction intern() {    var intern = new Worker("Bob", 21, 110, 0, 110);    intern.goToWork();    return intern;}// Task 4: Code a manager object, methodsfunction manager() {    var manager = new Worker("Alice", 30, 120, 100, 30);    manager.doSomethingFun();    return manager;}  

