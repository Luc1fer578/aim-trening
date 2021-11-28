const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screens');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

const colors = ['#6fa2dd', '#996fdd', '#dd6fdd', '#d8565d', '#56d8d1', '#b5d856', '#d8aa56', '#16661d'];

let time = 0;
let score = 0;

function getRandomNumber(min,max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.lendth);
    return colors[index];
}

function setColors(element) {
    const color = getRandomColor();
    element.style.background = color;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();

    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    setColors(circle);

    circle.classList.add('circle');
    circle.style.width =`${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    
    board.appened(circle); 
}

