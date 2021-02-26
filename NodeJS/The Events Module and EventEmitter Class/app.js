const EventEmitter = require('events');
const { get } = require('http');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let isuru = new Person('Isuru');
let sanduni = new Person('Sanduni');

sanduni.on('name',()=>{
    console.log('my name is '+ sanduni.name);
})

isuru.on('name',()=>{
    console.log('my name is ' + isuru.name);
});

isuru.emit('name');
sanduni.emit('name');
