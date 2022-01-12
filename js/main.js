(function Main(){
	let buttonHighlight = document.getElementById("buttonHighlight");
	let buttoncolorPicker = document.getElementById("colorPicker");
	let colorCode = document.getElementById("colorCode");

	buttonHighlight.addEventListener('click', e => {
		hljs.highlightAll();
	});
	buttoncolorPicker.addEventListener('click', e => {
		let class_bg = Array.from(buttoncolorPicker.classList).find(c => c.includes('backgroundProject'));
		let nb = class_bg.split('_')[1];

		buttoncolorPicker.classList.remove(class_bg);
		colorCode.classList.remove(class_bg);
		class_bg = class_bg.replace(nb, (parseInt(nb) + 1) > 4 ? 1 : (parseInt(nb) + 1));
		buttoncolorPicker.classList.add(class_bg);
		colorCode.classList.add(class_bg);
	});

})();
