function getValue() {
	valueA = parseInt(document.forms.abform.atext.value);
	valueB = parseInt(document.forms.abform.btext.value);
};


//指定数値のx%分の値を求める
function perValue() {
	getValue();
	console.log(valueB * valueA / 100);
};

//パーセントを求める
function findPercent() {
	getValue();
	console.log(valueB / valueA * 100 + "%");
};

//指定数値に対してx%分足す＆引く
function perCalcPlusMinus() {
	getValue();
	var floatpercent = valueA / 100;
	var addvalue = valueB * floatpercent;
	console.log(valueB + "%分足すと:" + (valueA + addvalue));
	console.log(valueB + "%分引くと:" + (valueA - addvalue));
}

