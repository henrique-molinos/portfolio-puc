function somaValores(x) {
	return function(y) {
		return x + y;
	}
}

var soma5 = somaValores(5);

console.log(soma5(2)); // A função anônima só será executada neste momento, quando somaValores terá o parâmetro x=5, e soma5 está informando y=2