// tekstai
console.log('asfsgdghb');

// skaiciai
console.log(852545);

// boolean - logine reiksme
console.log(true);
console.log(false);

// sarasai - array
console.log( [1, 2, 3, 4, 5] );
console.log( ['a', 'b', 'c'] );
console.log( ['a', 87, 'b', 5451, 'c', [1, 2, 's']] );

// objektai - object
console.log( {name: 'Rimantas', age: 31.8} );

console.log('-------------------------');
console.log('-------------------------');
console.log('-------------------------');

const PI = 3.141592654;
console.log(PI);

const vardas = 'Rimantas';
console.log(vardas);

let manoAmzius = 9;
console.log(manoAmzius);

manoAmzius = 10;
console.log(manoAmzius);

const sunsVardas = 'Rexas';
console.log(sunsVardas);

let miestas = "Vilnius";
console.log(miestas);

let personazas = "Don' Ki Chotas";
console.log(personazas);

const kabutes = 'Kabuciu buna: viengubos(\') ir dvygubos(").';
console.log(kabutes);

const kabutes2 = "Kabuciu buna: viengubos(') ir dvygubos(\").";
console.log(kabutes2);

var kintamasis = 'x';
console.log(kintamasis);

const skaitmenys = [9, 1, 7];
console.log(skaitmenys);

const raides = ['', 'a', 'b', 'c'];
console.log(raides);

let arBlaivas = true;
console.log(arBlaivas);

console.log('-------------------------');
console.log('-------------------------');
console.log('-------------------------');

console.log(skaitmenys);

const skaitmenuSuma = skaitmenys[0] + skaitmenys[1] + skaitmenys[2];
console.log(skaitmenuSuma);

const s1 = 2;
const s2 = 15;

const suma = s1 + s2;
console.log(suma);

const skirtumas = s1 - s2;
console.log(skirtumas);

const dalmuo = s1 / s2;
console.log(dalmuo);

const sandauga = s1 * s2;
console.log(sandauga);

const vidurkis = (s1 + s2) / 2;
console.log(vidurkis);

const pirmoSaknis = Math.sqrt( s1 );
console.log(pirmoSaknis);

const maziausias = Math.min(s1, s2);
console.log(maziausias);

const didziausiais = Math.max(s1, s2);
console.log(didziausiais);

const didziausiaisSarase = Math.max(skaitmenys);
console.log(didziausiaisSarase);

const t1 = 'Labas';
const t2 = 'rytas';

const tekstas = t1 + t2;
console.log(tekstas);

const pasisveikinimas = t1 + ' ' + t2;
console.log(pasisveikinimas);

// negalimos operacijos su ne skaiciais
console.log( t1 - t2 );
console.log( t1 * t2 );
console.log( t1 / t2 );

const abc = ['a', 'b', 'c', 'd', 'e'];
console.log(abc);

const abcIsGalo = abc[4] + ', ' + abc[3]
                        + ', ' + abc[2]
                        + ', ' + abc[1]
                        + ', ' + abc[0];
console.log(abcIsGalo);

const taiKaipTen = true + false + true + 2;
console.log(taiKaipTen);

console.log('-------------------------');
console.log('-------------------------');
console.log('-------------------------');
console.log('PALYGINIMAS');

// >, <, ===, >=, <=, !==
// s1 = 2; s2 = 15;

const s2t = '15';

if ( s2t !== s2 ) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

const m = 0;

if ( m < 0 ) {
    console.log('Neigiamas');
} else {
    if ( m === 0 ) {
        console.log('Nei neigiamas, nei teigiamas');
    } else {
        console.log('Teigiamas');
    }
}

if ( m < 0 ) {
    console.log('Neigiamas');
}
if ( m === 0 ) {
    console.log('Nei neigiamas, nei teigiamas');
}
if ( m >0 ) {
    console.log('Teigiamas');
}

if ( m < 0 ) {
    console.log('Neigiamas');
} else if ( m === 0 ) {
    console.log('Nei neigiamas, nei teigiamas');
} else {
    console.log('Teigiamas');
}

const akys = 'melynas';

if ( akys === 'rudos' ) {
    console.log('Melagis');
} else if ( akys === 'zalios' ) {
    console.log('5%');
} else if ( akys === 'melynas') {
    console.log('Cia mano');
} else {
    console.log('A tu bent turi akis?');
}


if ( 4 > 2) {
    console.log(true);
}

if ( '4' > 2) {
    console.log(true);
}

if ( 4 > '2') {
    console.log(true);
}

if ( '2' > '4') {
    console.log(true);
} else {
    console.log(false);
}

if ( '+' > 'Z') {
    console.log(true);
} else {
    console.log(false);
}

const manoNumeris = '370612345678';

if ( '370600000000' < manoNumeris) {
    console.log(true);
} else {
    console.log(false);
}

console.log('-------------------------');
console.log('-------------------------');
console.log('-------------------------');
console.log('CIKLAI');

// console.log('1 atsispaudimai');
// console.log('2 atsispaudimai');
// console.log('3 atsispaudimai');
// console.log('4 atsispaudimai');
// console.log('5 atsispaudimai');
// console.log('6 atsispaudimai');
// console.log('7 atsispaudimai');


let kiekAtsispaudimu = 7;
kiekAtsispaudimu++;

for ( let n=1; n<=kiekAtsispaudimu; n++ ) {
    console.log(n + ' atsispaudimai');
}


console.log(skaitmenys);

for ( let i=0; i<skaitmenys.length; i++ ) {
    console.log(i, '-', skaitmenys[i]);
}

console.log(pasisveikinimas);

for ( let i=0; i<pasisveikinimas.length; i++ ) {
    console.log(i, '-', pasisveikinimas[i]);
}

// sukame cikla per teksto raides
for ( let i=0; i<pasisveikinimas.length; i++ ) {
    // ar einamoji raide yra ne tarpas
    if ( pasisveikinimas[i] !== ' ' ) {
        // ja spausdiname
        console.log(i, '-', pasisveikinimas[i]);
    }
}

console.log('----------------------');

const atbuliaiva = 'atbuliaiva';

for ( let i=atbuliaiva.length-1; i>=0; i-- ) {
    console.log( atbuliaiva[i] );
}

console.log('----------------------');

for ( let i=atbuliaiva.length; i>0; i-- ) {
    console.log( atbuliaiva[i-1] );
}


console.log('----------------------');

const skaiciukas = 456789;
console.log( skaiciukas );

const tekstinisSkaiciukas = '' + skaiciukas;
console.log(tekstinisSkaiciukas);

const antrasSkaiciukas = tekstinisSkaiciukas[1];
console.log(antrasSkaiciukas);

console.log('----------------------');
console.log('SKAICIU SUMA INTERVALE');

let nuo = 0;
let iki = 4;
let nuoIkiSuma = 0;

for ( let i=nuo; i<=iki; i++ ) {
    nuoIkiSuma = nuoIkiSuma + i;
    console.log(i, ' - ', nuoIkiSuma);
}

console.log('Suma intervale nuo ' + nuo + ' iki ' + iki + ' yra lygu ' + nuoIkiSuma);



nuo = 0;
iki = 100;
nuoIkiSuma = 0;

for ( let i=nuo; i<=iki; i++ ) {
    nuoIkiSuma = nuoIkiSuma + i;
    console.log(i, ' - ', nuoIkiSuma);
}

console.log('Suma intervale nuo ' + nuo + ' iki ' + iki + ' yra lygu ' + nuoIkiSuma);


console.log('----------------------');
console.log('SKAICIU KIEKIS INTERVALE BE LIEKANOS');

let intStart = 0;
let intEnd = 11;
let daliklis = 3;
let kartai = 0;

// reikia pereiti per visus skaicius intervale
    // jeigu einamasis skaicius dalinasi be liekanos
        // kartai++

for ( let i=intStart; i<=intEnd; i++ ) {
    if ( i % daliklis === 0 ) {
        kartai++;
    }
}

console.log('Skaičių intervale tarp ' + intStart + ' ir ' + intEnd + ', besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai + ' vienetai.');



intStart = 0;
intEnd = 11;
daliklis = 5;
kartai = 0;

for ( let i=intStart; i<=intEnd; i++ ) {
    if ( i % daliklis === 0 ) {
        kartai++;
    }
}

console.log('Skaičių intervale tarp ' + intStart + ' ir ' + intEnd + ', besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai + ' vienetai.');


intStart = 0;
intEnd = 11;
daliklis = 7;
kartai = 0;

for ( let i=intStart; i<=intEnd; i++ ) {
    if ( i % daliklis === 0 ) {
        kartai++;
    }
}

console.log('Skaičių intervale tarp ' + intStart + ' ir ' + intEnd + ', besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai + ' vienetai.');


console.log('-------------------------');
console.log('-------------------------');
console.log('-------------------------');
console.log('FUNKCIJOS');

function tusciaFunkcija() {
    return false;
}

console.log( tusciaFunkcija() );

console.log('-------------------------');

function daugyba( skaicius1, skaicius2 ) {
    // console.log('Man dave:', skaicius1, skaicius2,  skaicius1 * skaicius2);

    if ( typeof(skaicius1) !== 'number' ) {
        return 'Durnelis 1...';
    }
    if ( typeof(skaicius2) !== 'number' ) {
        return 'Durnelis 2...';
    }

    return skaicius1 * skaicius2;
}

console.log( daugyba( 3, 8 ) );
console.log( daugyba( 3, -8 ) );
console.log( daugyba( 3, 'asdf' ) );
console.log( daugyba( -3, 8 ) );
console.log( daugyba( true, 8 ) );
console.log( daugyba( -3, -8 ) );


console.log('----------------------');
console.log('SKAITMENU KIEKIS SKAICIUJE');

function skaitmenuKiekisSkaiciuje( number ) {
    // console.log('Gavau', number);
    
    // if ( typeof(number) !== 'number' ) {
    //     return 'Pateikta netinkamo tipo reikšmė, turi buti skaicius.';
    // }
    // if ( ''+number === 'NaN' ) {
    //     return 'Pateiktas NaN, galimi tik baigtiniai skaiciai.';
    // }
    // if ( ''+number === 'Infinity' ) {
    //     return 'Pateiktas Infinity, galimi tik baigtiniai skaiciai.';
    // }

    if ( typeof(number) !== 'number' ||
         isFinite(number) === false ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    // spejamas skaitmenu kiekis
    let ilgis = (''+number).length;

    // eliminuojame, jei yra kablelis (taskas)
    if ( number % 1 !== 0 ) {
        ilgis--;
    }

    // eliminuojame, jei yra minusas
    if ( number < 0 ) {
        ilgis--;
    }

    return ilgis;
}

console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) );

console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( 3.1415 ) );
console.log( skaitmenuKiekisSkaiciuje( -159 ) );
console.log( skaitmenuKiekisSkaiciuje( -3.1415 ) );
console.log( skaitmenuKiekisSkaiciuje( 0.000001 ) );

console.log( skaitmenuKiekisSkaiciuje( 0.0000001 ) );
console.log( skaitmenuKiekisSkaiciuje( -0.0000001 ) );


console.log('----------------------');
console.log('DIDZIAUSIAS SKAICIUS SARASE');

function didziausiasSkaiciusSarase( list ) {
    
    if ( Array.isArray(list) === false ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if ( list.length === 0 ) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }
    let list2=[];
    let temp=0;
    
    let biggest = -Infinity;
    
    // einu per skaiciu sarasa
        // jeigu, einamasis skaicius didesnis uz mano jau zinoma didziausia
            // biggest = einamasis skaicius;
     for (let i=0; i<list.length; i++){
        if(typeof list[i] ==='number'){
            list2[temp]=list[i];
            temp++;
        }
     }      
            
    for ( let i=0; i<list2.length; i++ ) {
        if ( list2[i] > biggest ) {
            biggest = list2[i];
        }
        
       
       
        
    }
    if (biggest == -Infinity){
       return 'negalima funkcija';
    }
 console.log(list2);
 
    return biggest;
}

console.log( didziausiasSkaiciusSarase( 425 ) );
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( [] ) );

console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );


console.log( didziausiasSkaiciusSarase( [ 'asdf', 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 'asdf', 'asdf', 'asdf' ] ) );


