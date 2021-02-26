//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};
	return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"

let john = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(john.getFullName());


function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName() {
            return firstName + ' ' + lastName;
        }
    }
}
// When a function creates an object, it is called a factory function.
// The createPerson() is a factory function because it returns a new person object.

// The following code uses the createPerson() factory function to create two objects john and jane:

let john = createPerson('John', 'Doe'),
    jane = createPerson('Jane', 'Doe');

console.log(john.getFullName());
console.log(jane.getFullName());
