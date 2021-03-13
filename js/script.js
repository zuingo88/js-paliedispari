//Una funzione per capire se la parola è palindroma

function es1sol1() {
    function invertiStringa(str) { //funzione per avere una stringa invertita dopo averla scomposta, formato un array con le singole lettere che la compongono, invertito il loro ordine e averle ricomposte in una stringa

        var dividi = str.split('');
        var inverti = dividi.reverse();
        var riunisci = inverti.join('');

        return riunisci;
    }

    var word = prompt('Inserisci una parola');

    console.log('La tua parola: ', word);
    console.log('Il suo inverso: ', invertiStringa(word));

    if (word === invertiStringa(word)) {
        console.log(word, 'è un palindromo!!!');
    } else {
        console.log(word, 'non è un palindromo...');
    }
};


function es1sol2() {
    function palindromo(str) { //divido a metà una stringa e controllo che la prima metà sia uguale al contrario della seconda. questo sistema, rispetto al precedente non funziona con numeri o lettere singole.

        var half = Math.floor(str.length / 2);

        for (var i = 0; i < half; i++)
            if (str[i] == str[str.length - i - 1]) {
                console.log('La tua parola è:', str);
                console.log(str, 'è un palindromo!');
            } else {
                console.log('La tua parola è:', str);
                console.log(str, 'non è un palindromo.');
            }
    };

    var word = prompt('Inserisci una parola');

    palindromo(word);
};



//L'utente sceglie pari o dispari e un numero da 1 a 5. Generiamo un numero random(sempre da 1 a 5) per il computer. Sommiamo i due numeri e dichiariamo chi ha vinto.

function es2() {
    function handRnd(min, max) {
        var value = Math.floor(Math.random() * max + min);
        return value;
    };

    function isPair(value) {
        var pair = 0;
        if (value % 2 == 0) {
            pair = 1;
            return true;
        } else {
            return false;
        }
    };

    var scommessa = prompt('Scegli: pari o dispari?');
    var puntata = parseInt(prompt('Lancia un numero da 1 a 5'));
    var computer = handRnd(1, 5);
    console.log('Hai scommesso', scommessa, 'ed hai buttato', puntata, 'mentre il com ha buttato', computer);
    var sum = puntata + computer;

    if (isPair(sum)) {
        console.log('La loro somma è pari...');
    } else {
        console.log('La loro somma è dispari...');
    };

    if (scommessa == 'pari' && isPair(sum)) {
        console.log('HAI VINTO!!!');
    } else if (scommessa == 'dispari' && isPair(sum) == false) {
        console.log('HAI VINTO!!!');
    } else {
        console.log('HAI PERSO!');
    };
};



//es1sol1();

//es1sol2();

//es2();