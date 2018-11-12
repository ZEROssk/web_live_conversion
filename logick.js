//'use strict'

function addValue()
{
	let input = 'input'; 
	let output = 'output';
	let s = document.getElementById(input).value;
	
	function hex(s) {
		console.log(s)
		var result = "";
		for(var i=0; i<s.length; ++i){
			var h = ("0"+s.charCodeAt(i).toString(16)).substr(-2);
			result += h;
		}
		return result;
	}
	document.getElementById(output).value = hex(s);
}

