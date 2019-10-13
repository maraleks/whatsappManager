document.addEventListener("DOMContentLoaded", function() {
	
	document.getElementById("whatsapp").onclick = function(e){
		e.preventDefault();
		// Отправить событие в Facebook Pixel и Google Analytics
		// fbq('track','whatsapp');
		// gtag('event', 'whatsapp');
		window.location.href = this.getAttribute("href");
	}

});