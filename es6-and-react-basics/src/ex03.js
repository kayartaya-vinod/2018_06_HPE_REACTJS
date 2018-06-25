// es5 style of a class

// a constructor for an object
function Person(name, email) {
    // following statements add new properties to the invoking object
    this.name = name;
    this.email = email;
}

// To add new member method...
Person.prototype.info = function() {
    console.log('Name = %s, Email = %s', this.name, this.email);
}

// this is a function call using window as the invoking object
Person('John', 'john@exmaple.com');
let p1 = new Person('Vinod', 'vinod@vinod.co');
p1.info()

let p2 = new Person('Shyam', 'shyam@example.com');
p2.info()

class Product {
    name = '';
    price = '';

    constructor({name, price}) {
        this.name = name;
        this.price = price;
    }

    info() {
        console.log('Name = %s', this.name);
        console.log('Price = Rs.%s', this.price);
    }
}

let pr1 = new Product({name: 'Mobile', price: 15000});
pr1.info();

let name = 'Vinod', city = 'Bangalore';
const msg = `Hello, ${name}, how's weather in ${city}?`;
console.log(msg);