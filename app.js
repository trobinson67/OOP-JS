class Vehicle {
	constructor(a, b, c) {
		this.make = a;
		this.model = b;
		this.year = c;
	}
	honk() {
		return "Beep";
	}
	toString() {
		let { a, b, c } = this;
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
	}
}

class Car extends Vehicle {
	constructor(a, b, c) {
		super(a, b, c);
	}
	numWheels() {
		return 4;
	}
}

class Motorcycle extends Vehicle {
	constructor(a, b, c) {
		super(a, b, c);
	}
	numWheels() {
		return 2;
	}
	revEngine() {
		return "VROOM";
	}
}

class Garage {
	constructor(capacity) {
		this.vehicles = [];
		this.capacity = capacity;
	}
	add(newVehicle) {
		if (!(newVehicle instanceof Vehicle)) {
			return "Only vehicles are allowed here!";
		}
		if (this.vehicles.length >= this.capacity) {
			return "Sorry we're full!";
		}
		this.vehicles.push(newVehicle);
		return "Vehicle added!";
	}
}
