'use strict';

var clock = new Vue({
	el: '#Clock',
	data: {
		time: ''
	}
})

setInterval(realTime(), 1000);

function set2time(num) {
	let t;
	if ( num < 10 ) {
		t = "0" + num;
	} else {
		t = num;
	}
	
	return t;
}

function realTime() {
	let nowTime = new Date();
	let nowHour = set2time( nowTime.getHours() );
	let nowMin  = set2time( nowTime.getMinutes() );
	let nowSec  = set2time( nowTime.getSeconds() );
	clock.time = "Clock: " + nowHour + ":" + nowMin + ":" + nowSec;
}
