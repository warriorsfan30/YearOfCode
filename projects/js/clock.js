function Time() {
	var currentTime = new Date();
	var meridiem = "AM";
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
	setTimeout('Time()',1000);
    if (hours == 0) {
		hours = 12;
	} 
    else if (hours > 12) { 
		hours = hours - 12;
		meridiem="PM";
	}
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
    var clock = document.getElementById('clockDisplay');
	clock.textContent = hours + ":" + minutes + ":" + seconds + " " + meridiem;
}
Time();
