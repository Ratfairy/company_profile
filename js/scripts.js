/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });

        const updateNavbar = () => {
            mainNav.classList.toggle('navbar-scrolled', window.scrollY > 40);
        };

        updateNavbar();
        window.addEventListener('scroll', updateNavbar);
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const revealSelectors = [
        '.about-company-wrapper',
        '.company-video-header',
        '.about-video',
        '.company-profile-header',
        '.company-profile-card',
        '.technical-section .section-title',
        '.technical-section .row',
        '.certification-section .section-title',
        '.certificate-card',
        '.main-products-section .section-title',
        '.main-product-card',
        '.equipment-header',
        '.equipment-card',
        '.customer-header',
        '.customer-logo-card',
        '.awards-header',
        '.awards-card',
        '.contact-header',
        '.contact-info-card',
        '.contact-map-card'
    ];

    const revealElements = document.querySelectorAll(revealSelectors.join(','));

    if (revealElements.length) {
        revealElements.forEach((element, index) => {
            element.classList.add('reveal-on-scroll');
            element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 90}ms`);
        });

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.16,
            rootMargin: '0px 0px -70px 0px'
        });

        revealElements.forEach(element => revealObserver.observe(element));
    }

});
