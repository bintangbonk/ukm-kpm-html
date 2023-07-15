import "flowbite";

    // Hamburger
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });

    // Navbar Fixed
    window.onscroll = function() {
        const header = document.querySelector('header');
        const fixedNav = header.offsetTop;
        const brand = document.querySelector('#brand')
        const hamburgerLine = document.querySelector('hamburger-line')


        if (window.pageYOffset > fixedNav) {
            header.classList.add('navbar-fixed')
            brand.classList.add('brand-fixed')

        } else {
            header.classList.remove('navbar-fixed')
            brand.classList.remove('brand-fixed')
        }
    }