
//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...

String.prototype.yell = function () {
	return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function () {
	return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
};
const nums = [6, 7, 8, 9];
nums.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"


// A prototype is another object that is used as a fallback
// source of properties. When an object gets a request for a property that it does
// not have, its prototype will be searched for the property, then the prototype’s
// prototype, and so on.

let empty = {};
console.log(empty.toString);
// → function toString()…{}
console.log(empty.toString());
// → [object Object]

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null


// A property like speak(line) in an object expression is a shorthand way of
// defining a method. It creates a property called speak and gives it a function
// as its value

let protoRabbit = {
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");



// The “proto” rabbit acts as a container for the properties that are shared by all
// rabbits. An individual rabbit object, like the killer rabbit, contains properties
// that apply only to itself—in this case its type—and derives shared properties from its prototype 
