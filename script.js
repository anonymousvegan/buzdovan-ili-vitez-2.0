const odgovori = [];
const tacniOdgovoriKorisnika =  [];
let trentuno = 1; 
let indexTrenutnog;
let ukupno = pitanja.length;
let rand = [];
const slike = [
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
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpeg",
    "20.jpeg"
    ];

let tekstovi  = [" Ti si potpuni buzdovan, tebe demoni razvaljuju! Uzmi nešto pametno da radiš, da čitaš Bibliju, upiši školu gusala ili  nađi neko planinarsko društvo!",
"Nisi  totalno odvaljen, i imaš potencijala, moli se Bogu da se promeniš i da napreduješ u životu!",
"Vidi prijatelju, treba da prestaneš da radiš te loše stvari, i da počneš da radiš dobre stvari, na samoj si sredini!",
"još  ti fali da budeš vitez, pročitaj još jednom Bibliju pa da te ženimo!",
"Na dobrom si putu da budeš prava britka sablja! Potrebno je da obnoviš gradivo i utvrdiš u praksi.",
"Svaka čast, Serdare! Ti si pravi vitez (ili princeza u slučaju da ovu aplikaciju koriste devojke), možeš da osnuješ porodicu!"
]

const buttons = document.querySelectorAll(".btn");
const imgElem = document.querySelector("#slika-pitanja")
const ukupnoElem = document.querySelector("#ukupno")
const trentunoElem = document.querySelector("#trenutno")
const pitanjeElem = document.querySelector("#tekst");
const slikaElem = document.querySelector("#slika-pitanja")
const linijaElem = document.querySelector("#linija");
const audioElem = document.querySelector("#audio")
const krajElem = document.querySelector("#kraj");
const krajnjitekstElem = document.querySelector("#krajnji-tekst");
const spanElem = document.querySelector("#rezultat-broj");

buttons.forEach(button =>{
    button.addEventListener("click", (event) => {
        if(trentuno<=ukupno){
            btn = event.target.textContent;
            let moguciOdgovori = pitanja[indexTrenutnog].odgovori;
            let tacniOdgovori = pitanja[indexTrenutnog].tacan;
            for(let i=0; i<3; i++){
                if(moguciOdgovori[i].tekst == btn){
                    odgovori.push(i);
                    if(moguciOdgovori[i].zvuk != ""){
                        audio.src = `files/${moguciOdgovori[i].zvuk}`;
                        audio.play();
                    }
                    tacniOdgovori.forEach(odgovor =>{
                        if(i == odgovor){
                            tacniOdgovoriKorisnika.push(i);
                        }
                    })
                    trentuno++;
                    if(trentuno<=ukupno){
                        podesi()
                    }
                    else{
                        krajElem.classList.add("prikazi");
                        let brojTacnihOdgovora = tacniOdgovoriKorisnika.length;
                        spanElem.textContent = `${brojTacnihOdgovora}/${ukupno}`;
                        if(tacniOdgovoriKorisnika.length>=0){
                            console.log(0);
                            krajnjitekstElem.textContent = tekstovi[0];
                        }
                        if(tacniOdgovoriKorisnika.length>=4){
                            console.log(0);
                            krajnjitekstElem.textContent = tekstovi[1];
                        }
                        if(tacniOdgovoriKorisnika.length>=8){
                            console.log(0);
                            krajnjitekstElem.textContent = tekstovi[2];
                        }
                        if(tacniOdgovoriKorisnika.length>=12){
                            console.log(0);
                            krajnjitekstElem.textContent = tekstovi[3];
                        }
                        if(tacniOdgovoriKorisnika.length>=16){
                            console.log(0);
                            krajnjitekstElem.textContent = tekstovi[4];
                        }
                        if(tacniOdgovoriKorisnika.length>=20){
                            console.log(0);
                            krajnjitekstElem.textContent = tekstovi[5];
                        }
                    }
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

function podesi(){
    rand = random();
    indexTrenutnog = trentuno - 1;
    trentunoElem.textContent = trentuno;
    ukupnoElem.textContent = ukupno;
    pitanjeElem.textContent = pitanja[indexTrenutnog].pitanje;
    slikaElem.src = `files/${slike[indexTrenutnog]}`;
    linijaElem.style.width = `${(100 / ukupno) * trentuno}%`;   
    buttons.forEach((btn, index) => {
        btn.textContent = pitanja[indexTrenutnog].odgovori[rand[index]].tekst;
        if(trentuno == 4 && rand[index] == 0){
            btn.classList.add("btn-danger");
        }
        if(trentuno == 5){
            btn.classList.remove("btn-danger");
        }
    });
}

podesi();