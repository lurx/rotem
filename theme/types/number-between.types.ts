type NumberBetween<Min, Max> = number & {
	readonly NumberBetween: unique symbol; // this is the phantom type
};

// This is a type guard function which can be used to assert that a string
// is of type StringOfLength<Min,Max>

const isNumberBetween = <Min extends number, Max extends number>(
	num: number,
	min: Min,
	max: Max,
): num is NumberBetween<Min, Max> => num >= min && num <= max;

// type constructor function
export const numberBetween = <Min extends number, Max extends number>(
	input: unknown,
	min: Min,
	max: Max,
): NumberBetween<Min, Max> => {
	if (typeof input !== 'number') {
		throw new Error('invalid input');
	}

	if (!isNumberBetween(input, min, max)) {
		throw new Error('input is not between specified min and max');
	}

	return input; // NumberOfBetween<Min,Max>
};

const isHexBetween0And255 = (input:string) => {
  const hex = parseInt(input, 16);
  return isNumberBetween(hex, 0, 255);
}