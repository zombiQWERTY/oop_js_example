(function() {
	"use strict";
	AppName.Common = (function() { // Class
		function Common() { // Constructor
			_slideClickable(); // Call private method
		}

		_slideClickable = function() { // Private method
			$(".slide-clickable").on("click", function() {
				document.location.href = $(this).attr("data-href");
			});
		};

		return Common; // Вызов конструктора

	})();

}).call(this);

// Всегда создавай компонент Common
// В нем храни общие для всего сайта скрипты, которые вмещаются в 1 метод.
// Следовательно не длиньше 10 - 20 строк