const nameInput = document.querySelector('#nameInput');
const expInput = document.querySelector('#expInput');
const cardNumberInput = document.querySelector('#cardNumberInput');
const submitBtn = document.querySelector('button[type=submit]');
const cardNumberOutput = document.querySelector('#card-number');
const expOutput = document.querySelector('#exp');
const nameOutput = document.querySelector('#name');

nameInput.addEventListener('input', () => {
	if (nameInput.value.length > 21) {
		nameInput.value = nameInput.value.substr(0, 20);
	}

	var pattern = /[0-9%$()\[\]{}]/g;

	while (pattern.test(nameInput.value)) {
		nameInput.value = nameInput.value.replace(pattern, '');
	}

	nameOutput.textContent = nameInput.value;
});

expInput.addEventListener('input', () => {
	expOutput.textContent = expInput.value;
});

cardNumberInput.addEventListener('input', () => {
	cardNumberOutput.textContent = cardNumberInput.value;
});
