export function signal(value) {
    //console.log('Signal creata con value:', value);

    let followers = [];

    let signalValue = value;

    //una funzione può avere delle sottofunzioni, in questo caso signalFunction è una funzione che restituisce il valore attuale del signal
    const signalFunction = () => signalValue;
    //se viene chiamata (), senza parametri, restituisce il valore attuale del signal

    signalFunction.set = (newValue) => signalValue = newValue;  
    //una funzione può avere proprietà, in questo caso set è una proprietà che è una funzione che prende un nuovo valore e lo assegna a signalValue
    //se viene chiamata set con un nuovo valore, aggiorna il valore del signal

    signalFunction.update = (updateFunction) => signalValue = updateFunction(signalValue);
    //update è una proprietà che è una funzione che prende una funzione di aggiornamento, che a sua volta prende il valore attuale del signal e restituisce un nuovo valore
    //se viene chiamata update con una funzione di aggiornamento, aggiorna il valore del signal con il risultato della funzione di aggiornamento
    //la differenza tra set e update è che set prende un nuovo valore direttamente, mentre update prende una funzione che calcola il nuovo valore a partire da quello attuale

    return signalFunction;
    
}

export function effect(effectFunction) {
    
}