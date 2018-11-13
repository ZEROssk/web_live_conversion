function addValue() {
	let input = 'input';
	let output = 'output';
	let s = document.getElementById(input).value;
	var encoded = encodeURI(s);

	console.log(encoded);

	document.getElementById(output).value = encoded;
}
