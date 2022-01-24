const odgovori = [];
let trentuno; 
let indexTrenutnog;
let ukupno = pitanja.length;
let slike = [
    "1.png",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpeg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg"
    ];


const buttons = document.querySelectorAll(".btn");
const imgElem = document.querySelector("#slika-pitanja")
const ukupnoElem = document.querySelector("#ukupno")
const trentunoElem = document.querySelector("#trenutno")
const pitanjeElem = document.querySelector("#tekst");
const slikaElem = document.querySelector("#")

buttons.forEach(button =>{
    button.addEventListener("click", (event) => {
        btn = event.target.textContent;
        let moguciOdgovori = pitanja[indexTrenutnog].odgovori;
        for(let i=0; i<3; i++){
            if(moguciOdgovori[i].tekst == btn){
                odgovori.push(i);
                console.log(i);
                trentuno++;
                if(trentuno<=ukupno){
                    podesi()
                }
                else{
                    console.log("kraj");
                }
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

let rand = [];


function podesi(){
    rand = random();
    indexTrenutnog = trentuno - 1;
    trentunoElem.textContent = trentuno;
    ukupnoElem.textContent = ukupno;
    pitanjeElem.textContent = pitanja[indexTrenutnog].pitanje;
    buttons.forEach((btn, index) => {
        btn.textContent = pitanja[indexTrenutnog].odgovori[rand[index]].tekst;
    });
}

start()
function start(){
    trentuno = 1;
    podesi(trentuno, ukupno );
}