document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const emailInput = document.getElementById('email-input').value;

    if (validateEmail(emailInput)) {
        // Display alert after successful subscription
        alert(`Thank you for subscribing with ${emailInput}!`);
    } else {
        // Show an error message if the email is invalid
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    // Basic email validation using a regular expression
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

window.onload = function() {
    window.scrollTo(0, 0);

    gsap.from("header", 1.5, {
        delay: 0,
        y: -300,
        stagger: {
            amount: 0.5,
        },
        ease:"power4.inOut",
    });
    gsap.from(".hero-section-top", 1.5, {
        delay: 0,
        x: -1000,
        stagger: {
            amount: 0.5,
        },
        ease:"power4.inOut",
    });
    gsap.from(".hero-section-bottom", 1.5, {
        delay: 0,
        y: 400,
        stagger: {
            amount: 0.5,
        },
        ease:"power4.inOut",
    });
    gsap.from(".hero-container-right", 1.5, {
        delay: 0,
        x: 1000,
        stagger: {
            amount: 0.5,
        },
        ease:"power4.inOut",
    });
};

