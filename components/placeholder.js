(function() {
	"use strict";
	AppName.Placeholder = (function() { // Class
		var $elements, attrName;
		$elements = $(".placeholder");
		attrName  = "data-placeholder";

		function Placeholder() { // Constructor
			_set(); // Call private method
			_focus();  // Call private method
		}

		_set = function() { // Private method
			var $element;
			$elements.each(function() {
				$element = $(this);
				$element.val($element.attr(attrName));
			});
		};

		_focus = function() { // Private method
			var $element;
			$elements
				.on("focus", function(){
					$element = $(this);
					if ($element.val() === $element.attr(attrName)) {
						$element.val("");
					}
				})
				.on("blur", function(){
					$element = $(this);
					if(!$element.val()) {
						$element.val($element.attr(attrName));
					}
				});
		};

		return Placeholder; // Вызов конструктора

	})();

}).call(this);
