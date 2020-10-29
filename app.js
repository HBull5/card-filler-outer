const nameInput = document.querySelector('#nameInput');
const expInput = document.querySelector('#expInput');
const cardNumberInput = document.querySelector('#cardNumberInput');
const submitBtn = document.querySelector('button[type=submit]');
const cardNumberOutput = document.querySelector('#card-number');
const expOutput = document.querySelector('#exp');
const nameOutput = document.querySelector('#name');

nameInput.addEventListener('input', () => {
	if (nameInput.value.length >= 20) {
		nameInput.value = nameInput.value.substr(0, 20);
	}

	var pattern = /[0-9%$()\[\]{}^#]/g;

	while (pattern.test(nameInput.value)) {
		nameInput.value = nameInput.value.replace(pattern, '');
	}

	nameOutput.textContent = nameInput.value;
});

expInput.addEventListener('input', () => {
	// max of 5
	if (expInput.value.length >= 5) {
		expInput.value = expInput.value.substr(0, 5);
	}

	// add "/" automatically for the user after 2 characters and then they still be able to backspace afterwards
	if (expInput.value.length === 2) {
		expInput.value += '/';
	}

	// check to remove all letters
	const pattern = /[^0-9/]/g;

	while (pattern.test(expInput.value)) {
		expInput.value = expInput.value.replace(pattern, '');
	}

	expOutput.textContent = expInput.value;
});

expInput.addEventListener('keydown', (e) => {
	if (e.key === 'Backspace' && expInput.value.length === 3) {
		expInput.value = expInput.value.substr(0, 2);
	}
});

cardNumberInput.addEventListener('input', () => {
	if (cardNumberInput.value.length >= 19) {
		cardNumberInput.value = cardNumberInput.value.substr(0, 19);
	}

	const pattern = /[A-Za-z!@#$%^&*()P_\{_\};]/g;

	while (pattern.test(cardNumberInput.value)) {
		cardNumberInput.value = cardNumberInput.value.replace(pattern, '');
	}

	if (cardNumberInput.value.length >= 4) {
		if (cardNumberInput.value.length === 4) {
			cardNumberInput.value += ' ';
		} else if (cardNumberInput.value.length === 9) {
			cardNumberInput.value += ' ';
		} else if (cardNumberInput.value.length === 14) {
			cardNumberInput.value += ' ';
		}
	}

	cardNumberOutput.textContent = cardNumberInput.value;
});

cardNumberInput.addEventListener('keydown', (e) => {
	// prettier-ignore
	if (e.key === 'Backspace' && cardNumberInput.value[(cardNumberInput.value.length - 1)] === ' ') {
		cardNumberInput.value = cardNumberInput.value.substr(0, cardNumberInput.value.length - 1);
	}
});
