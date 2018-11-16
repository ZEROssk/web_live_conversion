'use strict';

(function () {

	let input;
	let output;

	let checkbox_2;
	let checkbox_8;
	let checkbox_10;
	let checkbox_16;
	let checkbox_kana;

	window.addEventListener('load', () => {
		input = document.getElementById('input');
		output = document.getElementById('output');

		checkbox_2 = document.getElementById('checkbox_2');
		checkbox_8 = document.getElementById('checkbox_8');
		checkbox_10 = document.getElementById('checkbox_10');
		checkbox_16 = document.getElementById('checkbox_16');
		checkbox_kana = document.getElementById('checkbox_kana');

		checkbox_2.addEventListener('input', () => {
			checkbox_8.checked || checkbox_10.checked || checkbox_16.checked || checkbox_kana.checked = !checkbox_2.checked;
			if(checkbox_2.checked) {
				input.addEventListener('keyup', () => {
					addValue_2();
				}, false);
			}
		}, false);

		checkbox_8.addEventListener('input', () => {
			checkbox_2.checked || checkbox_10.checked || checkbox_16.checked || checkbox_kana.checked = !checkbox_8.checked;
			if(checkbox_8.checked) {
				input.addEventListener('keyup', () => {
					addValue_8();
				}, false);
			}
		}, false);

		checkbox_10.addEventListener('input', () => {
			checkbox_2.checked || checkbox_8.checked || checkbox_16.checked || checkbox_kana.checked = !checkbox_10.checked;
			if(checkbox_10.checked) {
			 	input.addEventListener('keyup', () => {
			 		addValue_10();
				}, false);
			}
		}, false);

		checkbox_16.addEventListener('input', () => {
			checkbox_2.checked || checkbox_8.checked || checkbox_10.checked || checkbox_kana.checked = !checkbox_16.checked;
			if(checkbox_16.checked) {
				input.addEventListener('keyup', () => {
					addValue_16();
				}, false);
			}
		}, false);

		checkbox_kana.addEventListener('input', () => {
			checkbox_2.checked || checkbox_8.checked || checkbox_10.checked || checkbox_16.checked = !checkbox_kana.checked;
			if(checkbox_kana.checked) {
				input.addEventListener('keyup', () => {
					addValue_kana();
				}, false)
			}
		}, false);
	}, false);

	function addValue_2() {
		let s = input.value;
		function hex(s) {
			var result = "";
			for(var i=0; i<s.length; ++i) {
				var h = (s.charCodeAt(i).toString(2));
				result += h;
			}
			return result;
		}
		console.log(hex(s))
		output.value = hex(s);
	}

	function addValue_8() {
		let s = input.value;
		function hex(s) {
			var result = "";
			for(var i=0; i<s.length; ++i) {
				var h = (s.charCodeAt(i).toString(8));
				result += h;
			}
			return result;
		}
		console.log(hex(s))
		output.value = hex(s);
	}

	function addValue_10() {
		let s = input.value;
		function hex(s) {
			var result = "";
			for(var i=0; i<s.length; ++i) {
				var h = (s.charCodeAt(i).toString(10));
				result += h;
			}
			return result;
		}
		console.log(hex(s))
		output.value = hex(s);
	}

	function addValue_16() {
		let s = input.value;
		function hex(s) {
			var result = "";
			for(var i=0; i<s.length; ++i) {
				var h = (s.charCodeAt(i).toString(16));
				result += h;
			}
			return result;
		}
		console.log(hex(s))
		output.value = hex(s);
	}

	function addValue_kana() {
		let s = input.value;
		var encoded = encodeURI(s);
		console.log(encoded);
		output.value = encoded;
	}

})();
