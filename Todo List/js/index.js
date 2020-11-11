let content = document.getElementById("content");

function charCount(e){
	let textEntered, charDisplay, counter, lastkey;
	textEntered = document.getElementById('content').value;
	charDisplay = document.getElementById('charactersLeft');
	counter = (180 - (textEntered.length));
	charDisplay.textContent = counter;

	lastkey = document.getElementById('lastKey');
	lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;
}

content.addEventListener('keyup', charCount, false);