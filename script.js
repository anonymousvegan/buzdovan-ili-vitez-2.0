const odgovori = [];
let trentuno; 
let indexTrenutnog;
let ukupno = pitanja.length;

const buttons = document.querySelectorAll(".btn");
const imgElem = document.querySelector("#slika-pitanja")
const ukupnoElem = document.querySelector("#ukupno")
const trentunoElem = document.querySelector("#trenutno")

buttons.forEach(button =>{
    button.addEventListener("click", (event) => {
        btn = event.target.textContent;
        let moguciOdgovori = pitanja[indexTrenutnog].odgovori;
        for(let i=0; i<3; i++){
            if(moguciOdgovori[i].tekst == btn){
                odgovori.push(i);
                console.log(i);
            }
        }
    })
})

function random(){
    let a=0, b=0, c=0;
    a = Math.floor(Math.random() * 3);
    do{
        b = Math.floor(Math.random() * 3);
    }while(a == b);
    do{
        c = Math.floor(Math.random() * 3);
    }while(c == a || c == b);
    return [a, b, c];
}

let rand = random();


function podesi(){
    indexTrenutnog = trentuno - 1;
    trentunoElem.textContent = trentuno;
    ukupnoElem.textContent = ukupno;
    buttons.forEach((btn, index) => {
        btn.textContent = pitanja[indexTrenutnog].odgovori[rand[index]].tekst;
    });
}

start()
function start(){
    trentuno = 1;
    podesi(trentuno, ukupno );
}