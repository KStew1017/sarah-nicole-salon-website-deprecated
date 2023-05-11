
$(function () {

//---------- Reset scroll position on page refresh -----------//
    history.scrollRestoration = 'manual';
    
//---------- Hamburger menu open -----------//
    $('.hamburger-button').click(function () {
        $('#hamburger').toggleClass('open');
    });
    
//---------- Intersection observer for fade in effect on first time viewed -----------//
    if ($(window).width() > 768) {
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
    } else {
        $(`
        .stylist-card-odd, 
        .stylist-card-even, 
        .carousel, 
        .hero-card, 
        .section-title h1
        `).addClass('show');
    }
    
//---------- Navbar fade in effect on scroll -----------//
    function navbarScroll() {
        if (window.scrollY > 0) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    }

    window.addEventListener('scroll', navbarScroll);

//---------- Testimonials marquee scroll -----------//
    $('.marquee').marquee({
        duration: 10000,
        gap: 100,
        duplicated: true,
    });
})

