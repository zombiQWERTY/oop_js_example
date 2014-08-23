(function() {
	"use strict";
	AppName.GoTop = (function() { // Class
		var $goTop; // Private vars
		$goTop = $("#goTop");

		function GoTop() { // Constructor
			_goTopInit(); // Call private method
		}

		_goTopInit = function() { // Private method
			_goTopScroll(); // Call private method
			_goTopClick(); // Call private method
		};

		_goTopScroll = function() { // Private method
			$(window).on("scroll", function() {
				if($(this)).scrollTop()) {
					$goTop.fadeIn(function() {
						stop(true, true);
					});
				} else {
					$goTop.fadeOut(function() {
						stop(true, true);
					});
				}
			});
		};

		_goTopClick = function() { // Private method
			$goTop.on("click", function() {
				$("body, html").animate({
					scrollTop: 0
				}, 800);
			});
		};

		return GoTop; // Вызов конструктора

	})();

}).call(this);

// Кэшируй DOM в переменных только в том случае,
// Если эта переменная будет использоваться более одного раза
// Конструктор - без точки с запятой в конце

// Приватные переменные заводятся вне конструктора, в теле класса,
// Публичные переменные заводятся в конструкторе так: this.test = 123;
// Без var
// Работа с публичными переменными:
// Все публичные переменные, приведенные в данном примере, запишутся. Приведены 2 варианта записи

// (function() {
// 	"use strict";
// 	AppName.GoTop = (function() {
// 		var self;
// 		self = GoTop;
// 		this.privateVar1 = 1;
// 		self.privateVar2 = 2;

// 		function GoTop() {
// 			this.privateVar3 = 3;
// 			self.privateVar4 = 4;
// 			_myPrivate();
// 		}

// 		_myPrivate = function() { // Приватный метож
// 			this.privateVar5 = 5;
// 			self.privateVar6 = 6;
// 			$(el).on("click", function() {
// 				console.log(this.privateVar5); // undefined, потому что this будет обращаться к $(el)
// 				console.log(self.privateVar5); // 5, потому что self у нас записано. Всегда рекомендуется называть эту переменную так
// 				self.privateVar7 = 7; // Запишется в объект GoTop
// 				this.privateVar7 = 7; // Запишется в $(el)
// 			});
// 			self.myPublic(); // Вызов публичного метода из того же класса
// 			this.myPublic(); // Или так
// 			AppName.GoTop.prototype.myPublic() // Вызов из другого класса, но в этом классе тоже будет работать
// 		};

// 		GoTop.prototype.myPublic = function() { // Публичный метод
// 			// Че-нибудь
// 		};

// 		return GoTop; // Вызов конструктора

// 	})();

// }).call(this);
