const active = document.querySelector('#home');
active.classList.add('active');
console.log('it worked')

const navLinks = document.querySelectorAll('.nav-link');

for (let i=0; i< navLinks.length; i++) {
    navLinks[i].addEventListener('mouseover', () => {
        navLinks[i].classList.add('fadeInLeft');
        console.log('itwork')
    })
}