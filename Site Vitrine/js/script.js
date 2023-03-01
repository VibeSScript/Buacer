let button = document.querySelector('.button');
button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let produitsLink = document.querySelector('a[href="#container"]');

produitsLink.addEventListener('click', (event) => {
    event.preventDefault();
    let produitsSection = document.querySelector('.bigcard');
    let position = produitsSection.offsetTop;
    let middleOfWindow = window.innerHeight / 2;
    window.scrollTo({
        top: position - middleOfWindow,
        behavior: 'smooth'
    });
});