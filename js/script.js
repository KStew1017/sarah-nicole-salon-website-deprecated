
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
            .section-title,
            .map
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
        .section-title,
        .map
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

//---------- Background parallax -----------//
    if ($(window).width() > 768) {
        $(window).scroll(function () {
            parallax();
        });
    }

    function parallax() {
        const wScroll = $(window).scrollTop();

        $('.parallax-wrapper').css('background-position', `center ${wScroll * .8}px`);

        $('#icon1').css('transform', `translateY(${-wScroll * 0.4}px) rotate(${wScroll * 0.1}deg)`);
        $('#icon2').css('transform', `translateY(${-wScroll * 0.3}px) rotate(${-wScroll * 0.18}deg)`);
        $('#icon3').css('transform', `translateY(${-wScroll * 0.5}px) rotate(${wScroll * 0.12}deg)`);
        $('#icon4').css('transform', `translateY(${-wScroll * 0.33}px) rotate(${-wScroll * 0.08}deg)`);
        $('#icon5').css('transform', `translateY(${-wScroll * 0.5}px) rotate(${wScroll * 0.04}deg)`);
        $('#icon6').css('transform', `translateY(${-wScroll * 0.37}px) rotate(${-wScroll * 0.1}deg)`);
        $('#icon7').css('transform', `translateY(${-wScroll * 0.33}px) rotate(${wScroll * 0.1}deg)`);
        $('#icon8').css('transform', `translateY(${-wScroll * 0.22}px) rotate(${-wScroll * 0.18}deg)`);
        $('#icon9').css('transform', `translateY(${-wScroll * 0.37}px) rotate(${wScroll * 0.12}deg)`);
        $('#icon10').css('transform', `translateY(${-wScroll * 0.3}px) rotate(${-wScroll * 0.08}deg)`);
        $('#icon11').css('transform', `translateY(${-wScroll * 0.4}px) rotate(${wScroll * 0.04}deg)`);
        $('#icon12').css('transform', `translateY(${-wScroll * 0.25}px) rotate(${-wScroll * 0.1}deg)`);
        $('#icon13').css('transform', `translateY(${-wScroll * 0.23}px) rotate(${wScroll * 0.1}deg)`);
        $('#icon14').css('transform', `translateY(${-wScroll * 0.18}px) rotate(${-wScroll * 0.18}deg)`);
        $('#icon15').css('transform', `translateY(${-wScroll * 0.3}px) rotate(${wScroll * 0.12}deg)`);
        $('#icon16').css('transform', `translateY(${-wScroll * 0.25}px) rotate(${-wScroll * 0.08}deg)`);
        $('#icon17').css('transform', `translateY(${-wScroll * 0.31}px) rotate(${wScroll * 0.04}deg)`);
        $('#icon18').css('transform', `translateY(${-wScroll * 0.16}px) rotate(${-wScroll * 0.1}deg)`);
    }

//---------- Meet us -----------//
    if ($(window).width() < 768) {
        $('.meet-us-container').toggle('hide');
    } else if ($(window).width() > 768) {
        $('.meet-us-mobile').toggle('hide');
    }
});



