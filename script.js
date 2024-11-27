document.addEventListener('DOMContentLoaded', function () {
	var burgerMenu = document.querySelector('.burger__menu');
	var headerMenu = document.querySelector('.header__menu');
	var body = document.body;

	burgerMenu.addEventListener('click', function (event) {
		burgerMenu.classList.toggle('active');
		headerMenu.classList.toggle('active');
		body.classList.toggle('lock');
	});
});

document.addEventListener("DOMContentLoaded", function() {
	const input = document.querySelector("#phone");
	const iti = intlTelInput(input, {
	  // Можна вказати початкову країну, наприклад, Україна
	   initialCountry: "ua",
	  separateDialCode: true, // Відображення коду країни окремо від номеру
	  preferredCountries: ["ua", "us", "gb"], // Список бажаних країн
	});
});



// Перевірка, чи є збережений стан поп-апу в sessionStorage
if (!sessionStorage.getItem('cookiesAccepted')) {
	// Показуємо поп-ап через 5 секунд після завантаження сторінки
	setTimeout(function() {
		 document.querySelector('.cookie-popup').style.display = 'block';
	}, 5000);
}

// Обробка натискання на кнопку "Akzeptieren"
document.querySelector('.cookie-popup__button').addEventListener('click', function() {
	sessionStorage.setItem('cookiesAccepted', 'true'); // Зберігаємо стан поп-апу в sessionStorage
	document.querySelector('.cookie-popup').style.display = 'none'; // Сховуємо поп-ап
});
