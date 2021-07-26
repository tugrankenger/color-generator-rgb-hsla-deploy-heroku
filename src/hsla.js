const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const name_end = document.querySelector('.name-end');

const hueArray = [];
const saturationArray= [];
const lightnessArray=[];

for(let i=0; i<=360;i++){
    hueArray.push(i);
}
for(let i=0; i<=100;i++){
    saturationArray.push(i);
}
for(let i=0; i<=100;i++){
    lightnessArray.push(i);
}

btn.addEventListener('click', ()=>{
    const hue= hueArray[getRandomHue()];
    const sat = saturationArray[getRandomSat()];
    const light = lightnessArray[getRandomLight()];
    const alpha= (Math.random()*1).toFixed(2);
    const colorRegEx = "hsla("+`${hue}`+","+`${sat}`+"%"+","+`${light}`+"%"+","+`${alpha}`+")";
    console.log(hue);
    console.log(sat);
    console.log(light);
    console.log(alpha);
    console.log(colorRegEx);

    color.textContent=colorRegEx;
    document.body.style.backgroundColor= colorRegEx;
    name_end.style.color= colorRegEx;
});

getRandomHue=()=>{
    return Math.floor(Math.random()*hueArray.length);
}
getRandomSat=()=>{
    return Math.floor(Math.random()*saturationArray.length);
}

getRandomLight=()=>{
    return Math.floor(Math.random()*lightnessArray.length);
};