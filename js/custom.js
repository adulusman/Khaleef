(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form default submission

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;

    // // Debugging: Check if inputs are being captured
    // alert(`Form Data:\nFirst Name: ${fname}\nLast Name: ${lname}\nPhone: ${number}\nMessage: ${message}`);

    // Construct WhatsApp message
    const whatsappMessage = `Hello, my name is ${fname} ${lname}. Phone: ${number}. Message: ${message}`;
    const whatsappURL = `https://wa.me/+919633094987?text=${encodeURIComponent(whatsappMessage)}`;

    // // Debugging: Check if URL is formed
    // alert(`Redirecting to: ${whatsappURL}`);
    // console.log("WhatsApp URL:", whatsappURL);

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
});



  
 
  