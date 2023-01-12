type StringOfLength<Min, Max> = string & {
	readonly StringOfLength: unique symbol; // this is the phantom type
};

// This is a type guard function which can be used to assert that a string
// is of type StringOfLength<Min,Max>
const isStringOfLength = <Min extends number, Max extends number>(
	str: string,
	min: Min,
	max: Max,
): str is StringOfLength<Min, Max> => str.length >= min && str.length <= max;

// type constructor function
export const stringOfLength = <Min extends number, Max extends number>(
	input: unknown,
	min: Min,
	max: Max,
): StringOfLength<Min, Max> => {
	if (typeof input !== 'string') {
		throw new Error('invalid input');
	}

	if (!isStringOfLength(input, min, max)) {
		throw new Error('input is not between specified min and max');
	}

	return input; // the type of input here is now StringOfLength<Min,Max>
};

// The phantom type prevents us from assigning StringOfLength manually like this:
// const a: StringOfLength<0, 10> = 'hello' // Type '"hello"' is not assignable to type { StringOfLength: unique symbol }