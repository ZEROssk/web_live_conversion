'use strict';

function set2fig(num) {
	let ret;
	if( num < 10 ) { ret = "0" + num; }
	else { ret = num; }
	
	return ret;
}

function showClock2() {
	let nowTime = new Date();
	let nowHour = set2fig( nowTime.getHours() );
	let nowMin  = set2fig( nowTime.getMinutes() );
	let nowSec  = set2fig( nowTime.getSeconds() );
	let msg = "Time: " + nowHour + ":" + nowMin + ":" + nowSec;
	document.getElementById("RealtimeClockArea").innerHTML = msg;
}

//setInterval('showClock2()',1000);

var clock = new Vue({
	el: '#RealtimeClockArea',
	data: {
		clock: setInterval('showClock2()',1000)
	}
})