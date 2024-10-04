//  // Smooth scrolling for navigation links
//  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Mobile menu toggle
// const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
// const nav = document.querySelector('nav');

// mobileMenuToggle.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });

// // Form validation and submission
// const contactForm = document.getElementById('contact-form');

// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     if (name && email && message) {
//         // In a real application, you would send this data to a server
//         console.log('Form submitted:', { name, email, message });
//         alert('Thank you for your message. We will get back to you soon!');
//         contactForm.reset();
//     } else {
//         alert('Please fill out all fields.');
//     }
// });

// // Intersection Observer for fade-in animation
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('fade-in');
//         }
//     });
// }, { threshold: 0.1 });

// document.querySelectorAll('.service-card, .about-content, #contact-form').forEach(el => {
//     el.style.opacity = '0';
//     el.style.transition = 'opacity 0.5s ease-out';
//     observer.observe(el);
// });

// // Helper function for fade-in animation
// function fadeIn(el) {
//     el.classList.add('fade-in');
// }


// For the gallary
var fullImgBox = document.getElementById('fullImgBox');
var fullImg = document.getElementById('fullImg');

function openFullImg(pic) {
    fullImgBox.style.display = 'flex';
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = 'none';
}