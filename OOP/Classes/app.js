// Classes are a template for creating objects. They encapsulate data with code to work on that data. 
// Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

// constructor is a function that will execute immediately when a new color is created

// methods can be created inside classes

class Color {
	constructor(r,g,b,name){
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
	innerRGB (){
		const {r,g,b} = this;
		return `${r},${g},${b}`;
	}
	rbg(){
		return `rbg(${this.innerRGB()})`;
	}
	rgba(a = 1.0){
		return `rgba(${this.innerRGB()},${a})`;
	}
	hex(){
		const {r,g,b} = this;
		return (
			'#' + ((1 << 24)) + (r << 16) + (g << 8) + b.toString(16).slice(1)
		);
	}
}
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');
