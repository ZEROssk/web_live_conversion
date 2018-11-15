Array.from((new TextEncoder('utf-8')).encode('あ')).map(v => v.toString(16))

/*
function check_16(ischecked) {
	if(ischecked == true) {
		console.log(ischecked)
		function addValue() {
			let input = 'input';
			let output = 'output';
			let s = document.getElementById(input).value;
			console.log(s)
			function hex(s) {
				var result = "";
				for(var i=0; i<s.length; ++i) {
					var h = (s.charCodeAt(i).toString(16));
					result += h;
				}
				return result;
			}
			console.log(hex(s))
			document.getElementById(output).value = hex(s);
		}	
	}
	else {
		console.log(ischecked)
	}
}

/*
document.getElementById('16').addEventListener('click',function() {
	if(this.checked) {
		function addValue() {
		let input = 'input';
		let output = 'output';
		let s = document.getElementById(input).value;
		function hex(s) {
			var result = "";
			for(var i=0; i<s.length; ++i) {
				var h = (s.charCodeAt(i).toString(16));
				result += h;
			}
			return result;
		}
		console.log(hex(s))
		document.getElementById(output).value = hex(s);
		}
	}
},false);

document.getElementById('kana').addEventListener('click',function() {
	if(this.checked) {
		function addValue() {
			let input = 'input';
			let output = 'output';
			let s = document.getElementById(input).value;
			var encoded = encodeURI(s);

			console.log(encoded);

			document.getElementById(output).value = encoded;
		}
	}
},false);
*/

