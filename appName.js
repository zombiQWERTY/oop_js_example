(function() {
	"use strict";
	
	var AppName;

	AppName = AppName || {};

	this.AppName = AppName;

}).call(this);

// Введение объекта для всего нашего приложения и запись его в window.
// То есть создаем глобальный объект
// Вместо AppName во всех файлах пиши название сайта.
// Например, сайт ООО Техностиль -> Technostyle
// Начинается с заглавной буквы

// Не делай так:
// var test = 123;
// Делай так:
// var test;
// test = 123;