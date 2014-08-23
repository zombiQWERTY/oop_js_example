(function() {
	"use strict";
	AppName.Initialize = (function() { // Class
		function Initialize() { // Constructor
			this.plugins(); // Call public method
			this.loader();  // Call public method
		}

		Initialize.prototype.plugins = function() { // Public method. Используй его для подключаемых плагинов
			$(".openModal").fancybox({
				padding   : 0,
				width     : 400,
				autoSize  : false,
				autoHeight: true
			});
		};

		Initialize.prototype.loader = function() { // Public method. Используй его для подключения модулей
			new AppName.Common();
			new AppName.GoTop();
			new AppName.Sliders();
			new AppName.Placeholder();
			new AppName.Validators($(".validate"));
		};

		return Initialize; // Вызов конструктора

	})();

	$(function() { // Скрипты всего приложения будут автоматически попадать в document.ready. Нигде более его не пиши
		new AppName.Initialize();
	});

}).call(this);

// Здесь я сделал public методы потому что
// Вдруг нужно будет переинициализировать
// Либо все скрипты, либо все подключаемые плагины разом,
// Например, после ajax загрузки
// Переинициализировать можно так:
// Все приложение: new AppName.Initialize();
// Все плагины   : new AppName.Initialize().plugins();
// Все скрипты   : new AppName.Initialize().loader();