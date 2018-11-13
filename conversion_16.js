function addValue() {
	let input = 'input'; 
	let output = 'output';
	let s = document.getElementById(input).value;
	function hex(s) {
		var result = "";
		for(var i=0; i<s.length; ++i){
			var h = (s.charCodeAt(i).toString(16));
			result += h;
		}
		return result;
	}
	console.log(hex(s))
	document.getElementById(output).value = hex(s);
}

