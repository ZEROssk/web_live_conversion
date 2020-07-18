'use strict';

function set2time(num) {
	let t;
	if( num < 10 ) {
		t = "0" + num;
	}
	else {
		t = num;
	}
	
	return t;
}

function showClock2() {
	let nowTime = new Date();
	let nowHour = set2time( nowTime.getHours() );
	let nowMin  = set2time( nowTime.getMinutes() );
	let nowSec  = set2time( nowTime.getSeconds() );
	let time = "Clock: " + nowHour + ":" + nowMin + ":" + nowSec;
	document.getElementById("RealtimeClockArea").innerHTML = time;
}

var clock = new Vue({
	el: '#RealtimeClockArea',
	data: {
		clock: setInterval('showClock2()',1000)
	}
})