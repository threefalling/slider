const slides = [
    {
        img: './img/image1.png',
        city: 'Rostov-on-Don<br>LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request'
    },
    {
        img: './img/image2.png',
        city: 'Sochi<br>Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request'
    },
    {
        img: './img/image3.png',
        city: 'Rostov-on-Don<br>Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request'
    }
]

const img = document.querySelector('.right-side__img');
const cityText = document.querySelector('.city-text');
const areaText = document.querySelector('.area-text');
const timeText = document.querySelector('.time-text');
const costText = document.querySelector('.cost-text');
const navButton = document.querySelectorAll('.nav__button');

let currentSlide = 0;

function showSlide(index) {
    const slide = slides[index];
    cityText.innerHTML = slide.city;
    areaText.textContent = slide.area;
    timeText.textContent = slide.time;
    costText.textContent = slide.cost;
    img.innerHTML = `<img src="${slide.img}" alt="image">`;

    navButton.forEach(button => button.classList.remove('active__nav'));
    navButton[index].classList.add('active__nav');

    dots.forEach(dot => dot.classList.remove('active-dot'));
    dots[index].classList.add('active-dot');
}

const dotsContainer = document.querySelector('.dots');

slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
})

const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    })
})

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
})

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
})

navButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);