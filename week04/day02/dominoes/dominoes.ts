import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
	let dominoes = [];
	dominoes.push(new Domino(5, 2));
	dominoes.push(new Domino(4, 6));
	dominoes.push(new Domino(1, 5));
	dominoes.push(new Domino(6, 7));
	dominoes.push(new Domino(2, 4));
	dominoes.push(new Domino(7, 1));
	return dominoes;
}

function print(dominoes: Domino[]) {
	dominoes.forEach(function (value) {
		console.log(value);
	});
}

let dominoes = initializeDominoes();

for (let i = 0; i < dominoes.length - 1; i++) {
	for (let j = 0; j < dominoes.length; j++) {
		if (dominoes[j].values[0] === dominoes[i].values[1]) {
			let replace: Domino = dominoes[j - 1];
			dominoes.splice(j - 1, 1, dominoes[i]);
			dominoes.splice(i, 1, replace);
		}
	}
}

print(dominoes);