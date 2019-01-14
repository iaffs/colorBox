// en boks dekket hele skjermen
// en liten boks
// musepeker når musen sveiper over
// få den midtstilt
// den lille boksen skal kunne klikkes på, og hver gang man klikker, bytter den plass
// en klikk-counter
// få fargen til å endres hver gang man klikker, til en tilfeldig hexadesimal

// Klikke-teller
var clickCounter = 0;
// klikkbar-boks
var btnBox2 = document.getElementById("box2");
// Teksten som endrer seg for hvert klikk
var countText = document.getElementById("countText");

// henter ut tilfeldig tall til plassering av liten boks
function getComputedStyleValue(direction) {    

    width = 800 - 100;
    height = 600 - 100;

    if (direction === "top") {
        var num = Math.floor(Math.random() * height);
        return num;
    }
    if (direction === "right") {
        var num = Math.floor(Math.random() * width);
        return num;        
    }
    return false;
}

// Funksjon som henter ut tilfeldig hex-verdi
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// teller antall museklikk + flytte tilfeldig
function clickActionMove() {
    btnBox2.style.top = getComputedStyleValue("top")+"px";
    btnBox2.style.right = getComputedStyleValue("right")+"px";
    btnBox2.style.backgroundColor = getRandomColor();
    clickCounter++;
    countText.innerHTML = clickCounter;
}

btnBox2.addEventListener("click", clickActionMove);

