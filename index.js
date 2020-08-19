window.onload = () => {
	document.querySelectorAll('button').forEach(
		b => b.addEventListener('click', handleClick)
	);
};

const handleClick = () => {
	const rows = document.querySelector('#rows');
	let cls = event.target.classList.value;

	if (rows.classList.contains('hidden')) {
		rows.classList.remove('hidden');
	}

	if (rows.innerHTML) {
		rows.innerHTML = "";
		addRows(cls);
	} else {
		addRows(cls);
	}
}

const addRows = (value) => {
	let text = `${value.charAt(0).toUpperCase()}${value.slice(1, value.length)}`;
	for (let i = 0; i < 5; i++) {
		rows.innerHTML += `<h3>${text}</h3>`;
	}
};
