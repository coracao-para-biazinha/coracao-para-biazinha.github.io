let heart = document.querySelector('.heart');
let joke  = heart.querySelector('#edit-me');
let img   = document.querySelector('.image');
let hasJoke = false;
let isDragging = false;
let alertTrigger = true;
const hasParent = (element, ...parents) => parents.some((parent) => parent.contains(element));

function addClassToHeart (e) {
    if (hasParent(e.target, heart.querySelector('.front'))) {
        heart.classList.add('touch-active');
    } else if (hasParent(e.target, joke)) {

    } else {
        heart.classList.remove('touch-active');
    };
};

function addClassToImg (e) {
    if (hasParent(e.target, img)) {
        img.classList.add('touch-active');
    } else {
        img.classList.remove('touch-active');
    };
};

function changeJoke (e) {
    if (hasParent(e.target, joke)) {
        if (hasJoke) {
            joke.firstChild.textContent = '12/06/2019';
            joke.lastChild.textContent  = '';
            hasJoke = false;
        } else {
            joke.firstChild.textContent = '24/01/2025';
            joke.lastChild.textContent  = '';
            hasJoke = true;
        };
    };
};

function dragHeart (e) {
    let touch;
    if (e.touches) {
        touch = e.touches[0];
    } else {
        touch = e;
    } 

    let rect = heart.getBoundingClientRect();
    let x = touch.clientX;
    let y = touch.clientY;

    e.preventDefault();

    if (isDragging) {
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        img.style.display = 'block';
        alertTrigger = false;
    };
}

document.addEventListener('click', (pointer) => {
    if (pointer.pointerType === 'touch') {
        addClassToHeart(pointer);
        addClassToImg(pointer);
    };
    changeJoke(pointer);
});

heart.addEventListener('mousedown', () => {isDragging = true});
heart.addEventListener('touchstart', () => {isDragging = true});
document.addEventListener('mousemove', dragHeart);
document.addEventListener('touchmove', dragHeart);
heart.addEventListener('mouseup', () => {isDragging = false});
heart.addEventListener('touchend', () => {isDragging = false});
heart.addEventListener('mouseleave', () => {isDragging = false});

setInterval(() => {
    let title = document.title;
    if (title == 'De: Cleytinhossauro') {
        document.title = 'Para: Biazinha';
    } else {
        document.title = 'De: Cleytinhossauro';
    }
}, 2000);

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (alertTrigger) {
            alert('Que tal olhar atrás do cartão?')
        }
    }, 15000)
})
