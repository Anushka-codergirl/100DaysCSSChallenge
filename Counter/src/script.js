// jQuery v3.3.1 is supported
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var Counter = function Counter() {var _this = this;_classCallCheck(this, Counter);this.
	numberDiv = $('#number');this.
	currSpan = $('#currNumber');this.
	prevSpan = $('#prevNumber');this.
	currValue = Number(this.currSpan.html());this.

	increment = function () {return ++_this.currValue;};this.
	decrement = function () {return --_this.currValue;};this.

	changeValue = function (operation) {
		_this.prevSpan.html(_this.currValue);
		_this.currSpan.html(operation === "+" ? _this.increment() : _this.decrement());
		_this.numberDiv.empty().append(_this.prevSpan[0].outerHTML, _this.currSpan[0].outerHTML);
	};};


var counter = new Counter();

$('#plus').click(function () {counter.changeValue("+");});

$('#minus').click(function () {counter.changeValue("-");});