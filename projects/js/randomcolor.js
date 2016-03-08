$(document).ready(function () {
	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};
	$("div").on("click", function () {
		$('div').css('background', randomColor());
	});
});
