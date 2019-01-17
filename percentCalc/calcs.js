function getValue() {
	answerId = document.getElementById('answer');
	valueA = parseInt(document.forms.abform.atext.value, 10);
	valueB = parseInt(document.forms.abform.btext.value, 10);
};

//指定数値のx%分の値を求める
function perValue() {
	getValue();
	let answer = valueB * valueA / 100;
	answerId.innerHTML = "答え:" + answer;
};

//パーセントを求める
function findPercent() {
	getValue();
	let answer = valueB / valueA * 100 + "%";
	answerId.innerHTML = "答え:" + answer;
};

//指定数値に対してx%分足す＆引く
function perCalcPlusMinus() {
	getValue();
	var floatpercent = valueA / 100;
	var addvalue = valueB * floatpercent;

	let plusAnswer = valueB + "%分足すと:" + (valueA + addvalue);
	let minusAnswer = valueB + "%分引くと:" + (valueA - addvalue);
	answerId.innerHTML = "答え:" + plusAnswer + " " + minusAnswer;
}