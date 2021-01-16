//***Type Delete Title***//

	var TxtType = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtType.prototype.tick = function() {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

		var that = this;
		var delta = 200 - Math.random() * 100;

		if (this.isDeleting) { delta /= 2; }

		if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
		}

		setTimeout(function() {
		that.tick();
		}, delta);
	};

	window.onload = function() {
		var elements = document.getElementsByClassName('typewrite');
		for (var i=0; i<elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #E1B000}";
		document.body.appendChild(css);
	};

//***Countdown timer***//
	// Set the date to count down to
	var countDownDate = new Date("Mar 1, 2021 00:00:00").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="**"
		document.getElementById("days").innerHTML = days;
		document.getElementById("hours").innerHTML = hours;
		document.getElementById("mins").innerHTML = minutes;
		document.getElementById("secs").innerHTML = seconds;


	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("days").innerHTML = "EXPIRED";
		}
	}, 1000);

//***Gallery click***//
	var slideIndex = 1;
		showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("demo");
		var captionText = document.getElementById("caption");
		if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " active";
		captionText.innerHTML = dots[slideIndex-1].alt;
	}

//***Gallery click no thumbnails***//
	var slideIndex3 = 1;
		showSlides3(slideIndex3);

	function plusSlides3(n) {
		showSlides3(slideIndex3 += n);
	}

	function currentSlide3(n) {
		showSlides3(slideIndex3 = n);
	}

	function showSlides3(n) {
		var i;
		var slides3 = document.getElementsByClassName("mySlides3");
		var dots3 = document.getElementsByClassName("dots3");
		var section3 = document.getElementsByClassName("demo3");
		var captionText3 = document.getElementById("caption3");
		if (n > slides3.length) {slideIndex3 = 1}
		if (n < 1) {slideIndex3 = slides3.length}
		for (i = 0; i < slides3.length; i++) {
			slides3[i].style.display = "none";
		}
		for (i = 0; i < dots3.length; i++) {
			dots3[i].className = dots3[i].className.replace(" active3", "");
		}
		slides3[slideIndex3-1].style.display = "block";
		dots3[slideIndex3-1].className += " active3";
		captionText3.innerHTML = section3[slideIndex3-1].alt;
	}

///*** Sidebar ***///
	function openNav() {
		document.getElementById("mySidebar").style.width = "250px";
		document.getElementById("main").style.marginRight = "250px";
	}

	function closeNav() {
		document.getElementById("mySidebar").style.width = "0";
		document.getElementById("main").style.marginRight= "0";
	}

///*** On Click Change Image ***///


    var gStorage = {};

	function toogle(anImage, anAltSrcArr) {
		if (typeof(anImage) === "undefined" || typeof(anAltSrcArr) === "undefined" || anAltSrcArr.length === 0) {
			return;
		}

		var id = anImage.id;
		var oldSrc = anImage.src;

		if (typeof(gStorage[id]) === "undefined") {
			gStorage[id] = {
				'id': id,
				'origSrc': oldSrc,
				'i': 0
			};
		}

		gStorage[id].i += 1;
		if (gStorage[id].i > anAltSrcArr.length) {
			gStorage[id].i = 0;
		}

		if (gStorage[id].i === 0) {
			anImage.src = gStorage[id].origSrc;
		} else {
			anImage.src = anAltSrcArr[gStorage[id].i - 1];
		}
	}

/*for page loader read load*/

	window.onload = function() {
		document.getElementById('body').className += " loaded";
		setTimeout(function(){
         document.getElementById('body').className += " loaded";
      },200);
	}

	function onReady(callback) {
	var intervalId = window.setInterval(function() {
		if (document.getElementsByTagName('body')[0] !== undefined) {
		window.clearInterval(intervalId);
		callback.call(this);
		}
		}, 1000);
	}

	onReady(function() {
		document.getElementById('body').className = "loaded";
	});

