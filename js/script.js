document.querySelector('.hamburger-button').addEventListener('click', function () {

    document.querySelector('#hamburger').classList.toggle('open');
});



$(window).scroll(function() {
    $('.fade-in').each(function() {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200) {
            $(this).addClass('visible');
        }
    });
});



window.addEventListener('load', function() {
    var heroElements = document.querySelectorAll('.card-animation');
    heroElements.forEach(function(element) {
        element.classList.remove('animate-card');
        setTimeout(function() {
            element.classList.add('animate-card');
        }, 100);
    });
});



window.addEventListener('load', function() {
    var heroElements = document.querySelectorAll('.img-animation');
    heroElements.forEach(function(element) {
        element.classList.remove('animate-img');
        setTimeout(function() {
            element.classList.add('animate-img');
        }, 100);
    });
});



window.addEventListener('load', function() {
    var heroElements = document.querySelectorAll('.text-animation');
    heroElements.forEach(function(element) {
        element.classList.remove('animate-text');
        setTimeout(function() {
            element.classList.add('animate-text');
        }, 100);
    });
});

const scrollText = document.querySelector('.scroll-text');
const scrollTextClone = scrollText.cloneNode(true);
scrollText.parentNode.appendChild(scrollTextClone);