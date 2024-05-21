document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navbar = document.getElementById('navbar');
    const navbarLinks = document.querySelectorAll('.navbar-link');

    // Toggle navbar visibility on button click
    menuButton.addEventListener('click', function() {
        navbar.classList.toggle('hidden')
    });

    // Close navbar when a link is clicked
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {  // Check if screen size is less than 768px (mobile)
                navbar.classList.add('hidden')
            }
        });
    });
});

/*
import {Collapse} from "flowbite";
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button')
    const navbar = document.getElementById('navbar')

    let collapse = {}
    menuButton.addEventListener('click', function () {
        createCollapseNav()
        if (navbar.classList.contains('visible')) {
            collapse.collapse()
        }
    })

    function createCollapseNav() {
        const $targetEl = document.getElementById('navbar');
        const $triggerEl = document.getElementById('menu-button') // ID of the hamburger
        collapse = new Collapse($targetEl, $triggerEl)
    }})
//*/