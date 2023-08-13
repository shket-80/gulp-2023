const result = document.querySelector('.result');//Поле с вычеслениями
const cifrGroup = document.querySelectorAll('.cifr-group');//Кнопки  с цыфрами
const actionGroup = document.querySelectorAll('.action-group');//Кнопки действия (+,-,*,/,=) итд.


import { Info } from './modules/info.js';
const info = new Info();

let power = false;
let numerator = true;
let infoclick = '';
let flagclick = false;
let a = '';
let b = '';
let c = '';
/*События кнопок с цыфрами */
cifrGroup.forEach(f => f.addEventListener('click', function () {
	//--------------------------------------------------------
	if (!power) { result.innerHTML = ''; power = !power; }
	//--------------------------------------------------------
	if (numerator) {
		flagclick = true;
		numeratorA(f.innerHTML);
	}
	else {
		flagclick = true;
		numeratorB(f.innerHTML);
	}
	//---------------------------------------------------------
}));
//*************************************************************** */

/*События кнопок действия */
actionGroup.forEach(f => f.addEventListener('click', function () {
	if (infoclick == '') { infoclick = f.innerHTML; }
	action(f.innerHTML);
	if (f.innerHTML == 'C') { defaultCalc(); }
}));

function defaultCalc() {
	power = false;
	numerator = true;
	infoclick = '';
	flagclick = false;
	a = '';
	b = '';
	c = '';
	result.innerHTML = '_';
}

function action(value) {
	switch (infoclick) {
		case '+': sum(value); break;
		case '-': minus(value); break;
		case '*': mnogity(value); break;
		case '/': delitel(value); break;
		//case '=': resultat(value); break;
		default: break;
	}
}
//*************************************************************** */
function resultat(value) {

}
//*************************************************************** */

function numeratorA(value) {//
	if (a == '0' && value == '0') {
		result.innerHTML = result.innerHTML.slice(0, -1);
		result.innerHTML = result.innerHTML + value;
	}
	else {
		if (a == '0') result.innerHTML = '';
		result.innerHTML = result.innerHTML + value;
		a = a + value;
	}

}//

function numeratorB(value) {//
	if (b == '0' && value == '0') {
		result.innerHTML = result.innerHTML.slice(0, -1);
		result.innerHTML = result.innerHTML + value;
	}
	else {
		if (b == '0') result.innerHTML = result.innerHTML.slice(0, -1);
		result.innerHTML = result.innerHTML + value;
		b = b + value;
	}
}//
//************************************************************* */
function sum(value) {
	if (flagclick) {//-----
		//==============================================
		if (numerator) {
			result.innerHTML = result.innerHTML + value;
			numerator = false;
			flagclick = false;
		}
		else {
			//-----------------------------------------
			if (c == '') { c = Number(a) + Number(b); }
			else { c = c + Number(a) + Number(b); }
			//-----------------------------------------
			if (value != '=') {
				result.innerHTML = c + value;
				infoclick = value;
			}
			else {
				result.innerHTML = c;
				infoclick = '';
				numerator = true;
			}
			a = ''; b = '';
		}
		//================================================
	}//-----
}
//************************************************************ */
function minus(value) {
	if (flagclick) {//-----
		//==============================================
		if (numerator) {
			result.innerHTML = result.innerHTML + value;
			numerator = false;
			flagclick = false;
		}
		else {
			//-----------------------------------------
			if (c == '') { c = Number(a) - Number(b); }
			else { c = c - Number(b); }
			//-----------------------------------------
			if (value != '=') {
				result.innerHTML = c + value;
				infoclick = value;
			}
			else {
				result.innerHTML = c;
				infoclick = '';
				numerator = true;
			}
			a = ''; b = '';
		}
		//================================================
	}//-----
}
//************************************************************* */
function mnogity(value) {
	if (flagclick) {//-----
		//==============================================
		if (numerator) {
			result.innerHTML = result.innerHTML + value;
			numerator = false;
			flagclick = false;
		}
		else {
			//-----------------------------------------
			if (c == '') { c = Number(a) * Number(b); }
			else {
				if (b != '')
					c = c * Number(b);
			}
			//-----------------------------------------
			if (value != '=') {
				result.innerHTML = c + value;
				infoclick = value;
			}
			else {
				result.innerHTML = c;
				infoclick = '';
				numerator = true;
			}
			a = ''; b = '';
		}
		//================================================
	}//-----
}
//*********************************************************** */
function delitel(value) {
	if (flagclick) {//-----
		//==============================================
		if (numerator) {
			result.innerHTML = result.innerHTML + value;
			numerator = false;
			flagclick = false;
		}
		else {
			if (b != '0' && b != 0 && b != '') {
				okDelitel(value);
			}
			else {
				infoclick = value;
				result.innerHTML = c + value;
			}
		}
		//================================================
	}//-----
}


function okDelitel(value) {
	if (c == '')
		c = Number(a) / Number(b);
	else
		c = c / Number(b);
	//-----------------------------------------
	if (value != '=') {
		result.innerHTML = c + value;
		infoclick = value;
	}
	else {
		result.innerHTML = c;
		infoclick = '';
		numerator = true;
	}
	a = ''; b = '';
}
//********************************************************** */
