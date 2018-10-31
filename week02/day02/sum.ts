// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(par: number):number {
	let summ: number = 0;
	for (let i: number = 0; i <= par; i++) {
		summ += i;
	}
	return summ;
}

console.log(sum(4));