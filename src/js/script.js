
const result = document.querySelector('.result');//Поле с вычеслениями
const cifrGroup = document.querySelectorAll('.cifr-group');//Кнопки  с цыфрами
const actionGroup = document.querySelectorAll('.action-group');//Кнопки действия (+,-,*,/,=) итд.

const calck = {
	power: false,
	clickButton: 0,
	action: null,
	a: '',
	b: '',
	c: '',
}

import { Info } from './modules/info.js';
const info = new Info(calck.power);


/*События кнопок с цыфрами */
cifrGroup.forEach(f => f.addEventListener('click', function () {
	calck.power = true;
	result.innerHTML = '';

	//!...........................
	if (calck.clickButton == 0)
		argA(f.innerHTML);
	else
		argB(f.innerHTML);
	//!...........................
}));


function argA(a) {
	if (Number(calck.a) == 0 && Number(a) == 0)
		calck.a = 0;
	else if (Number(calck.a) == 0)
		calck.a = a;
	else
		calck.a = calck.a + a;
	result.innerHTML = calck.a;
}

function argB(b) {
	//!............................................
	if (Number(calck.b) == 0 && Number(b) == 0)
		calck.b = 0;
	else if (Number(calck.b) == 0)
		calck.b = b;
	else
		calck.b = calck.b + b;
	//!.............................................
	if (calck.c == '')
		result.innerHTML = calck.a + calck.action + calck.b;
	else
		result.innerHTML = calck.c + calck.action + calck.b;
	calck.clickButton = 3;
}
//*************************************************************** */

/*События кнопок действия */
actionGroup.forEach(f => f.addEventListener('click', function () {
	if (f.innerHTML == 'C')
		reset();
	if (calck.power) {//?----->>>>>>  ...........................................

		//!.................................................................
		if (calck.clickButton == 1 && f.innerHTML != '=') {
			calck.action = f.innerHTML;
			const action = result.innerHTML.slice(-1);
			//!...............................................................
			if (action == "+" || action == "-"
				|| action == "*" || action == "/")
				result.innerHTML = result.innerHTML.slice(0, -1) + calck.action;
			else
				result.innerHTML = result.innerHTML + calck.action;
			//!................................................................
		}
		else if (calck.clickButton == 0 && f.innerHTML != '=') {
			calck.action = f.innerHTML;
			result.innerHTML = calck.a + calck.action + calck.b;
			calck.clickButton = 1;
		}
		//!..................................................................
		if (calck.clickButton == 3)
			actionSort(f.innerHTML);
		//!...................................................................

	}//? <<<<<<-----  .............................................................
}));

function actionSort(value) {
	if (value != '=') {
		//_______________________________
		switch (calck.action) {
			case '+': sum(value); break;
			case '-': minus(value); break;
			case '*': multiply(value); break;
			case '/': share(value); break;
			default: break;
		}
		//_________________________________
	}
	else
		solve(value);
}

function solve(value) {
	switch (calck.action) {
		case '+': sum(value); break;
		case '-': minus(value); break;
		case '*': multiply(value); break;
		case '/': share(value); break;
		default: break;
	}
}

function reset() {
	calck.power = false;
	calck.action = null;
	calck.clickButton = 0;
	calck.a = calck.b = calck.c = '';
	result.innerHTML = '_';
}
//!_________Похожие функции !!! ___________//
function sum(value) {
	if (calck.c == '')
		calck.c = Number(calck.a) + Number(calck.b);
	else
		calck.c = Number(calck.c) + Number(calck.b);
	common(value);
}

function minus(value) {
	if (calck.c == '')
		calck.c = Number(calck.a) - Number(calck.b);
	else
		calck.c = Number(calck.c) - Number(calck.b);
	common(value);
}

function multiply(value) {
	if (calck.c == '')
		calck.c = Number(calck.a) * Number(calck.b);
	else
		calck.c = Number(calck.c) * Number(calck.b);
	common(value);
}

function share(value) {
	if (Number(calck.b) != 0) {
		//!............................................
		if (calck.c == '')
			calck.c = Number(calck.a) / Number(calck.b);
		else
			calck.c = Number(calck.c) / Number(calck.b);
		//!.............................................
		common(value);
	}
}

// В этой функции повторяющийся код для sum() и minus()
function common(value) {
	if (value != '=')
		result.innerHTML = calck.c + value;
	else
		result.innerHTML = calck.c
	calck.a = calck.b = '';
	calck.clickButton = 1;
	calck.action = value;
}

//!_________________________________________________//


