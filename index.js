window.onload = function() {
	var buttons = document.querySelectorAll('button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', handleClick);
	}
}

function handleClick() {
	var rows = document.querySelector('#rows');
	var cls = this.className;
	
	if (rows.className === 'hidden' ) {
		rows.className = 'show';
	}

	if (rows.innerHTML) {
		rows.innerHTML = "";
		addRows(cls);
	} else {
		addRows(cls);
	}
}

function addRows(value) {
	/* Takes the button's class name (either 'hello' or 'goodbye') and capitalizes 
	the first letter to be used as the text */
	var text = value.charAt(0).toUpperCase() + value.slice(1, value.length);

	for (var i = 0; i < 5; i++) {
		rows.innerHTML += '<h3>' + text + '</h3>';
	}
}
