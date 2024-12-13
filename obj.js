var person=new Object();
person .firstname="vinni";
person.lastname="kothoju";
person.age=20;
console.log(person.firstname);
person.city = "New York";
console.log( person);
var product=new Object();
product.name="sunscreen";
product.price="500";
product.instock="1left";
console.log(product);
product.price="590";
console.log(product);
delete product.instock;
console.log(product);
var user=new Object();
user.username="venkat";
user.email="v@gmail.com";
user.address="uppal";
user.city="hyderabad";
user.state="ts";
user.zip="01";
console.log(Object.freeze(user));
user.email="ve@gmail.com";
console.log(user);
console.log(Object.isFrozen(user));
user.phone="567899";
console.log(user);
var car = {
    make: "Toyota",
    model: "Corolla",
    price: 20000
};

Object.seal(car);


delete car.make;

var isSealed = Object.isSealed(car);


console.log("Car object:", car);
console.log("Is the object sealed?", isSealed); 
console.log("Can 'make' property be deleted?", !("make" in car));
car.price = 25000;  


var isExtensible = Object.isExtensible(car);


console.log("Car object after modification:", car); 
console.log("Is the object extensible?", isExtensible);

