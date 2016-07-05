(function () {
	"use strict";

	var xhr = new XMLHttpRequest();

	xhr.addEventListener("load", xhr_load);
	xhr.open("GET", "info.json");
	xhr.send();

	function xhr_load (event) {
		var info = JSON.parse(event.currentTarget.response);
		var entries = info.stackoverflow;
		var group_headline_style = 'font-weight: normal;';

		if (!entries && !entries.length) {
			return;
		}

		console.group(
			'%cThis site used these %cStackoverflow%c entries',
			group_headline_style,
			'background:#f69c55;color:#fff;padding:5px;',
			group_headline_style
		);

		entries.forEach(function(entry) {
			console.log(
				'%c' + entry.title + '\n%c' + entry.url,
				'font:16px/1.5 arial;font-weight:bold;',
				'font-weight:normal;color:blue;'
			);
		});

		console.groupEnd();
	}
})();
