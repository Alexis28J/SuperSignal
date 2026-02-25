//per usare una libreria (fatta da me o di terze parti) devo importarla
//importiamo le funzioni signal ed effect dal file signal.js
import { signal, effect } from './signal.js';

const pippo = signal('Pippo ha caldo');
//signal è una funzione che restituisce un oggetto con una proprietà value che contiene il valore passato come argomento

console.log('Valore dentro il signal:', pippo());

pippo.set('Leonardo sente la mancanza di Copilot');

console.log('Valore dentro il signal:', pippo());

pippo.update((value) => value + ' e ha fame');
//Sto passando una funzione lambda all'update

console.log('Valore dentro il signal:', pippo());


effect(() => console.log('Valore dentro il signal', pippo()));


