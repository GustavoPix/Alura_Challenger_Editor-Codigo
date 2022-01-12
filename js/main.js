(function Main(){
	let buttonHighlight = document.getElementById("buttonHighlight");
	buttonHighlight.addEventListener('click', e => {
		hljs.highlightAll();
	})
})();
