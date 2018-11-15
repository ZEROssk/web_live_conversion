var s;

function addValue() {
	let input = 'input';
	let output = 'output';
	s = document.getElementById(input).value;
	//var encoded = encodeURI(s);

	//console.log(encoded);

	//document.getElementById(output).value = encoded;
	return addValue();
}

console.log(s)
var encoded = encodeURI(addValue(s));
document.getElementById(output).value = encoded;
