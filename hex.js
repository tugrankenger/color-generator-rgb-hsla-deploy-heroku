const hex =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn= document.getElementById('btn');
const color = document.querySelector('.color');
const name_end = document.querySelector('.name-end');

btn.addEventListener('click', ()=>{
    let hexCode= "#";
    for(let i=0; i<6; i++){
        hexCode += hex[generateRandom()];
    }
    color.textContent= hexCode;
    document.body.style.backgroundColor= hexCode;
    name_end.style.color=hexCode;
});

generateRandom=()=>{
    return Math.floor(Math.random()*hex.length);
}