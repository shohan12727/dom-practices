class Vehicle {
    constructor(type){
        this.type = type 
    }
    getThis () {
        console.log(this);
        
    }
}
const vehicle1 = new Vehicle ('bus')
console.log(vehicle1);
