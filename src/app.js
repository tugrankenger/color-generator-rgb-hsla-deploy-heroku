const colors= ["green", "orange", "rgb(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const name_end = document.querySelector('.name-end');

btn.addEventListener('click', ()=>{
    const randomNumber= getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor= colors[randomNumber];
    name_end.style.color=colors[randomNumber];
    color.textContent= colors[randomNumber]
});

getRandomNumber =()=>{
    return Math.floor(Math.random()*colors.length);
}