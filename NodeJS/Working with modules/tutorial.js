//working with modules

const sum = (num1,num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}

//export an object literal and tag along the properties to export all at once
module.exports = {sum:sum, PI:PI,SomeMathObject:SomeMathObject};

//the following is the way to do it one by one.

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;

