(function () {
	"use strict";

	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", xhr_load);
	xhr.open("GET", "stackoverflow.console.json");
	xhr.send();

	function xhr_load (event) {
		var json = JSON.parse(event.currentTarget.response);
		var group_headline_style = 'font-weight: normal;';

		console.group('%cThis site used these %cStackoverflow%c entries', group_headline_style, 'background:#f69c55;color:#fff;padding:5px;', group_headline_style);

		json.forEach(function(entry) {
			console.log('%c' + entry.title + '\n%c' + entry.url, 'font:16px/1.5 arial;font-weight:bold;', 'font-weight:normal;color:blue;');
		});

		console.groupEnd();
	}
})();
