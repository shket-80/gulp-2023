const result = document.querySelector('.result');//Поле с вычеслениями
const cifrGroup = document.querySelectorAll('.cifr-group');//Кнопки  с цыфрами
const actionGroup = document.querySelectorAll('.action-group');//Кнопки действия (+,-,*,/,=) итд.

let calc = true;//Переменная начало работы
let action = '0';//Для хранени значения действия

//Флаг для проверки записи в a или b 
let flag = true;

// Флаг проверка повторного клика действия
let clickAction = false;

//Хранение значений
let a = '';
let b = '';
let c = '';

/*События кнопок с цыфрами */
cifrGroup.forEach(f => f.addEventListener('click', function () {
	if (action != "=") {
		if (calc) { result.innerHTML = ''; calc = !calc; }
		if (flag) {
			if (a == '0' || a == 0) {
				a = '';
				a = a + f.innerHTML;
				result.innerHTML = result.innerHTML.slice(0, -1);
				result.innerHTML = result.innerHTML + f.innerHTML;
			}
			else {
				a = a + f.innerHTML;
				result.innerHTML = result.innerHTML + f.innerHTML;
			}

		}
		else {

			if (b == '0' || b == 0 && b != '') {
				b = '';
				b = b + f.innerHTML;
				result.innerHTML = result.innerHTML.slice(0, -1);
				result.innerHTML = result.innerHTML + f.innerHTML;
			}
			else {
				b = b + f.innerHTML;
				result.innerHTML = result.innerHTML + f.innerHTML;
			}

		}
	}
}));
/*События кнопок действия */
actionGroup.forEach(f => f.addEventListener('click', function () {
	switch (f.innerHTML) {
		case '+': actionSum(f.innerHTML); break;
		case '-': actionMinus(f.innerHTML); break;
		case '/': actionShare(f.innerHTML); break;
		case '*': actionmultiply(f.innerHTML); break;
		case 'C': defaultCalc(); break;
		case '=': perform(); break;
		default: break;
	}
}))

function actionShare(value) {
	if (flag) {
		if (!clickAction) {
			result.innerHTML = result.innerHTML + value;
			flag = false;
		}
	}
	else {
		perform();
		a = b = '';
		result.innerHTML = c + value;
	}
	action = value;
}

function actionmultiply(value) {
	if (flag) {
		if (!clickAction) {
			result.innerHTML = result.innerHTML + value;
			flag = false;
		}
	}
	else {
		perform();
		a = b = '';
		result.innerHTML = c + value;
	}
	action = value;
}

function actionSum(value) {
	if (flag) {
		if (!clickAction) {
			result.innerHTML = result.innerHTML + value;
			flag = false;
		}
	}
	else {
		perform();
		a = b = '';
		result.innerHTML = c + value;
	}
	action = value;
}

function actionMinus(value) {
	if (flag) {
		if (!clickAction) {
			result.innerHTML = result.innerHTML + value;
			flag = false;
		}
	}
	else {
		perform();
		a = b = '';
		result.innerHTML = c + value;
	}
	action = value;
}

function sum(a, b) {
	return Number(a) + Number(b);
}

function minus(a, b) {
	return Number(a) - Number(b);
}


function perform() {
	switch (action) {
		case '+': caseSum(); break;
		case '-': caseMinus(); break;
		case '*': caseMultiply(); break;
		case '/': caseShare(); break;
		default: break;
	}
}

function caseShare() {
	if (b != '0') {
		if (c == '') {
			c = a / b;
		}
		else {
			c = c / b;
		}
		a = b = '';
		result.innerHTML = c;
		action = '=';
	}

}

function caseMultiply() {
	if (c == '') {
		c = a * b;
	}
	else {
		c = c * b;
	}
	a = b = '';
	result.innerHTML = c;
	action = '=';
}

function caseSum() {
	if (c == '') {
		c = sum(a, b);
	}
	else {
		c = c + sum(b, 0);
	}
	a = b = '';
	result.innerHTML = c;
	action = '=';
}

function caseMinus() {
	if (c == '') {
		c = minus(a, b);
	}
	else {
		c = c - minus(b, 0);
	}
	a = b = '';
	result.innerHTML = c;
	action = '=';
}

function defaultCalc() {
	calc = true;
	a = b = c = '';
	action = '';
	flag = true;
	clickAction = false;
	result.innerHTML = 0;
}
