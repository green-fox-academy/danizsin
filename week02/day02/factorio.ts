// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(par: number):number {
	let fac: number = 1;
	for (let i: number = par; i > 0; i--) {
		fac *= i;
	}
	return fac;
}
console.log(factorio(4));
console.log(factorio(5));