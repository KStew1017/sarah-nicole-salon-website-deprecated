
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
            .section-title h1,
            .map,
            .row.section-title.aa
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
    const $mq = $('.marquee').marquee(
        {
        duration: 20000,
        gap: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
        }
    );

    const $mq2 = $('.marquee2').marquee(
        {
        duration: 10000,
        gap: 0,
        direction: 'right',
        duplicated: true,
        pauseOnHover: true
        }
    );

    $('.btn').click(function () {
        $('.btn').toggleClass('active-btn');
        if ($('#testimonial-pause').hasClass('active-btn')) {
            $mq.marquee('pause');
            $mq2.marquee('pause');
        } else {
            $mq.marquee('resume');
            $mq2.marquee('resume');
        }
    });

});



