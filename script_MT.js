console.log('=== Typy danych ====');

var liczba_uzytkownikow = 16.7;
var wynik = Math.floor(liczba_uzytkownikow*2);
console.log(wynik);

console.log('=== Obliczanie pierwiastka ====');

Math.sqrt(169);

console.log('=== Metody dla stringow ====');

var postcode ='02-414';
console.log(typeof postcode);
var format = /[-]/;
console.log(format.test(postcode));

console.log('=== zadanie 1 ====');

//niejawna konwersja danych (silnik JavaScript bez naszego udziału zmienia typ danych).

var tekstowe = "hej jak sie masz";
var liczbowe = 1.4;
var liczbowe_calkowite = 7;
var logiczne_prawda = true;
var logiczne_falsz = false;
var specjalne_puste = null;
var specjalne_niedef = undefined;
var duze_liczby = 1000005n;
var symbole = Symbol("dobrze, a ty?")

console.log(typeof tekstowe);
console.log(typeof liczbowe);
console.log(typeof liczbowe_calkowite);
console.log(typeof logiczne_falsz);
console.log(typeof logiczne_prawda);
console.log(typeof specjalne_puste);
console.log(typeof specjalne_niedef);
console.log(typeof duze_liczby);
console.log(typeof symbole);

var pierwszy=tekstowe + liczbowe
console.log(typeof pierwszy);

var drugi=tekstowe+logiczne_prawda
console.log(typeof drugi);

var trzeci=tekstowe + specjalne_puste
console.log(typeof trzeci);

var czwarty=tekstowe + symbole
console.log(typeof czwarty);

var piaty= liczbowe+logiczne_prawda
console.log(typeof piaty);

var szosty=liczbowe+specjalne_puste
console.log(typeof szosty);

var siodmy=tekstowe + symbole
console.log(typeof siodmy);

console.log('=== zadanie 2 ====') ;

var sigma = 4.5;
var beta =6;

var result=sigma/beta;
console.log("Wynik dzielenia " +result);
console.log("Wynik dzielenia " +Math.floor(result));
console.log("Wynik dzielenia " +Math.ceil(result));

console.log('=== zadanie 3 ====');

function lotto(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

lotto(5,100);

console.log('=== zadanie 4 ====') ;

var widthBox = "23px";
var widthPanel = "2px";
var dodawanie = widthBox+widthPanel;
console.log("Wynik dodawania pikseli " +dodawanie);
var podkrecone = parseInt(widthBox) + parseInt(widthPanel) ;
console.log("Drugi wynik dodawania pikseli " +podkrecone +"px");

console.log('=== zadanie 5 ====');

var mail= "motylek@buziaczek.pl";
console.log(typeof mail);
var malpa = /[@]/;
console.log(malpa.test(mail));
