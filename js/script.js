// history.scrollRestoration = 'manual';

// document.querySelector('.hamburger-button').addEventListener('click', function () {
//     document.querySelector('#hamburger').classList.toggle('open');
// });

// const cards = document.querySelectorAll(`
//     .stylist-card-odd, 
//     .stylist-card-even, 
//     .hero-image, 
//     .hero-card,
//     .section-title h1
// `);

// const observer = new IntersectionObserver(
//     entries => {
//         entries.forEach(entry => {
//             entry.target.classList.toggle("show", entry.isIntersecting);
//             if (entry.isIntersecting) observer.unobserve(entry.target);
//         })
//     },
//     {
//         threshold: 0.8
//     }
// );

// cards.forEach(card => {
//     observer.observe(card);
// });

history.scrollRestoration = 'manual';

$('.hamburger-button').click(function () {
    $('#hamburger').toggleClass('open');
});

const cards = $(`
    .stylist-card-odd, 
    .stylist-card-even, 
    .carousel, 
    .hero-card, 
    .section-title h1
`);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            $(entry.target).toggleClass("show", entry.isIntersecting);
            if (entry.isIntersecting) observer.unobserve(entry.target);
        })
    },
    { threshold: 0.8 }
);

cards.each(function(index, card) {
    observer.observe(card);
});

function navbarScroll() {
    if (window.scrollY > 0) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
}

window.addEventListener('scroll', navbarScroll);