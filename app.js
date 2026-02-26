//per usare una libreria (fatta da me o di terze parti) devo importarla
//importiamo le funzioni signal ed effect dal file signal.js
//import { signal, effect, computed } from './signal.js';

// const pippo = signal('Pippo ha caldo');
// //signal è una funzione che restituisce un oggetto con una proprietà value che contiene il valore passato come argomento

// const pippoLenght = computed(() => pippo().length, [pippo]);

// //console.log('Valore dentro il signal:', pippo());
// effect(() => console.log("E' partito effect", pippo(), pippoLenght()), [pippo]);

// pippo.set('Leonardo sente la mancanza di Copilot');

// console.log('Valore dentro il signal:', pippo());

// pippo.update((value) => value + ' e ha fame');
// //Sto passando una funzione lambda all'update

// console.log('Valore dentro il signal:', pippo());


import { MeteoService } from "./meteo-service.js";
import { effect } from "./signal.js";

const mServ = new MeteoService;

//mServ.getTemperature();

effect(() => console.log("Sono l'effect. Le temperature sono cambiate", mServ.tempSignal(), mServ.celsiusSignal()), [mServ.tempSignal]);

effect(() => {
    for (let i = 0; i < mServ.tempSignal().length; i++) {
        const card = `<div>time: ${mServ.tempSignal()[i].time}, Fahrenheit: ${mServ.tempSignal()[i].temp}, Celsius: ${mServ.celsiusSignal()[i].temp}</div>`
        document.body.innerHTML += card;
    }
}, [mServ.tempSignal, mServ.celsiusSignal]);
