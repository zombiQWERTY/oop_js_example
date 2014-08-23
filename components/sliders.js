(function() {
	"use strict";
	AppName.Sliders = (function() { // Class
		var navigationText;
		navigationText = ["<div class='btn-prev'></div>","<div class='btn-next'></div>"]; // Нафига нам в коде мильён раз повторять эту городушку?

		function Sliders() { // Constructor
			this.owlCarousel({
				element: $("#slider1"),
				params : {
					singleItem    : true,
					navigation    : true,
					navigationText: navigationText,
					pagination    : true,
					slideSpeed    : 1000,
					mouseDrag     : false,
					touchDrag     : false,
					responsive    : true
				}
			}); // Call private method
			this.owlCarousel({
				element: $("#top-models"),
				params : {
					items         : 5,
					navigation    : true,
					navigationText: navigationText,
					pagination    : false,
					slideSpeed    : 300,
					mouseDrag     : false,
					touchDrag     : false,
					responsive    : false
				}
			}); // Call private method
			this.owlCarousel({
				element: $("#slider3"),
				params : {
					items         : 1,
					navigation    : true,
					navigationText: navigationText,
					pagination    : true,
					slideSpeed    : 300,
					mouseDrag     : false,
					touchDrag     : false,
					responsive    : false
				}
			}); // Call private method
			this.owlCarousel({
				element: $("#slider4"),
				params : {
					singleItem    : true,
					navigation    : true,
					navigationText: navigationText,
					pagination    : true,
					slideSpeed    : 1000,
					mouseDrag     : false,
					touchDrag     : false
				}
			}); // Call private method
			this.owlCarousel({
				element: $("#slider5"),
				params : {
					items         : 1,
					navigation    : true,
					navigationText: navigationText,
					pagination    : true,
					slideSpeed    : 300,
					mouseDrag     : false,
					touchDrag     : false,
					responsive    : false
				}
			}); // Call private method
			this.owlCarousel({
				element: $(".footer__partners--tablet"),
				params : {
					items         : 7,
					navigation    : true,
					navigationText: navigationText,
					pagination    : true,
					slideSpeed    : 300,
					mouseDrag     : false,
					touchDrag     : false,
					responsive    : false
				}
			}); // Call private method
		}

		AppName.Sliders.prototype.owlCarousel = function(element, params) { // Public method. А вдруг придется вызвать в другом классе? Вот так: AppName.Sliders.prototype.owlCarousel(element, params);
			element.owlCarousel(params);
		};

		return Sliders; // Вызов конструктора

	})();

}).call(this);
