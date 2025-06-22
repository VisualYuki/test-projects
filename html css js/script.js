let first = {
	outline: {
		level: "1",
	},
};
let second = {
	outline: {
		label: "sdfsdf",
	},
};

let result = { ...second, ...first };

console.log(result);
