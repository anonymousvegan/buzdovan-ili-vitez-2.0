let pitanja = [
    {
        pitanje: "Da li pijete ?",
        odgovori: [
            {
                tekst: "Samo za slavu da bi očuvali stare običaje",
                zvuk : "",
            },
            {
                tekst: "Pomalo, rakija je dobra za imunitet",
                zvuk : "",
            },
            {
                tekst:  "Ništa jače od vode",
                zvuk : "",
            },
        ],
        tacan:2,
    },
    {
        pitanje: "Da li pušite?",
        odgovori: [
            {
                tekst: "Ponekad zapalim, uz kaficu",
                zvuk : "pusi_cigare.mp3",
            }, 
            {
                tekst:  "Ne, užasano smrdi",
                zvuk : "", //kad se ljubiš s kamenajrkom
            }, 
            {
                tekst:  "Ovo pitanje mi je nejasno",
                zvuk : "", //ideš pod mač bato
            }, 
        ],
        tacan:1,
    },
    {
        pitanje: "Škola je: ?",
        odgovori: [
            {
                tekst: "Obrazovno-vaspitna ustanova",
                zvuk : "",
            }, 
            {
                tekst: "Ateistička debilana",
                zvuk : "",
            }, 
            {
                tekst:  "Mesto za  druženje i igru",
                zvuk : "",
            }, 
        ],
        tacan:1,
    },
    {
        pitanje: "Gde ćeš tražiti devojku?",
        odgovori: [
            {
                tekst: "Na sistematkom pregledu(nije ovo, ne pitaj kako znam)",
                zvuk : "",
            }, 
            {
                tekst: "U diskoteci",
                zvuk : "",
            }, 
            {
                tekst: "Pitaću nekog pametnijeg da mi preporuči",
                zvuk : "",
            }, 
        ],
        tacan:2,
    },
    {
        pitanje: "Koja je najpametnija knjiga?",
        odgovori: [
            {
                tekst: "Biblija",
                zvuk : "",
            }, 
            {
                tekst: "Gorski Vijenac",
                zvuk : "",
            }, 
            {
                tekst: "Ana Karenjina",
                zvuk : "",
            }, 
        ],
        tacan: 0,
    },
    {
        pitanje: "Koja je najbolji auto?",
        odgovori: [
            {
                tekst: "Golf 2",
                zvuk : "crna_dvojka.mp3",
            }, 
            {
                tekst: "Konj",
                zvuk : "konj.mp3",
            }, 
            {
                tekst: "Bmw, to devojke vole",
                zvuk : "brm.mp3",
            }, 
        ],
        tacan: 1,
    },
    {
        pitanje: "Znaš li da rešiš Sledeće dvostruke integrale?",
        odgovori: [
            {
                tekst: "Naravno, to je ništa za mene",
                zvuk : "dvostruke_intregrale.mp3",
            }, 
            {
                tekst: "Ne, naučiću",
                zvuk : "",
            }, 
            {
                tekst: "ne",
                zvuk : "",
            }, 
        ],
        tacan: 2,
    },
    {
        pitanje: "Koje ti je omiljeno piće?",
        odgovori: [
            {
                tekst: "Voda",
                zvuk : "",
            }, 
            {
                tekst: "Kokakola",
                zvuk : "kokakola.mp3",
            }, 
            {
                tekst: "ne",
                zvuk : "",
            }, 
        ],
        tacan: 2,
    },
    {
        pitanje: "",
        odgovori: [
            {
                tekst: "Naravno, to mene",
                zvuk : "dvostruke_intregrale.mp3",
            }, 
            {
                tekst: "Ne, naučiću",
                zvuk : "",
            }, 
            {
                tekst: "ne",
                zvuk : "",
            }, 
        ],
        tacan: 2,
    },
]

console.log(pitanja.length);

// const buttons = document.querySelectorAll(".btn");
// buttons.forEach(button =>{
//     button.addEventListener("click", ()=>{
//         alert("Radi");
//     })
// })