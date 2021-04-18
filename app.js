const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const btn = document.querySelector('.btn');
const color = document.querySelector('.color')

btn.addEventListener('click',() =>{
    const rnd = getRandomNumbers();

    color.textContent = colors[rnd];
    document.body.style.background = colors[rnd];

});

function getRandomNumbers(){

    return Math.floor(Math.random() * colors.length);
}


