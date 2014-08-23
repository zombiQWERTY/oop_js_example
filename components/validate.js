(function() {
	"use strict";
	AppName.Validators = (function($element) { // Class
		var KEY_START, KEY_END; // Заглавными бувами объявляй константы
		KEY_START = 8;
		KEY_END   = 46;

		function Validators($element) { // Constructor
			_init($element); // Call private method
		}

		_init = function($element) { // Private method
			var elementValue, $el;
			$element.on("keyup", function(e){
				$el = $(this);
				elementValue = $el.val();
				if ((e.keyCode === KEY_START) || (e.keyCode === KEY_END)) {
					if (!elementValue) {
						_changeState();
					} else {
						_normalBehavior();
					}
				} else {
					_normalBehavior();
				}
			});
		};

		_changeState = function(state, $element) { // Private method
			if (state === "success") {
				$element.removeClass("input--fail").addClass("input--success");
			} else if(state === "error") {
				$element.removeClass("input--success").addClass("input--fail");
			} else {
				$element.removeClass("input--fail, input--success")
			}
		}

		_normalBehavior = function() { // Private method
			if (_checkEmail(elementValue)) {
				_changeState("success");
			} else {
				_changeState("error");
			}
		}

		_checkEmail = function(email) {
			var pattern; // Ругулярка это regExp или pattern
			pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return pattern.test(email);
		}

		return Validators; // Вызов конструктора

	})();

}).call(this);
