let animal = {
	eats: true,
};
let rabbit = {
	jumps: true,
};

rabbit.__proto__ = animal; // (*)
debugger;
// теперь мы можем найти оба свойства в rabbit:
alert(rabbit.eats); // true (**)
alert(rabbit.jumps); // true
