const object = {};
const originalValues = {};

let a = document.getElementById("ingredients_id");                  // Zugriff auf das <div>, das die Zutatenliste enthält
let ingredient_count = a.getElementsByTagName("div").length;        // Zählt alle div-Elemente im Zutaten-Container, sprich alle zeilen der Zutatenliste
                           


for (let i = 1; i <= ingredient_count; i++) {                       //Wiederholt alles in der geschwungenen klammer so oft bi i <= ingredient_count ist
    element = document.getElementById("ingredient_" + i);           // Hole die Zutatenmänge aller 12 zutaten nacheinander 
    object["x" + i] = element                                       // lege den wert von element im objekt "objekt" als x1 beim der ersten wiederholung, als x2 bei der zweiten, usw...
    originalValues["x" + i] = parseFloat(element.innerText)         // speichert den ursprünglichen zahlenwert als float (zum rechnen) im objekt originalValues als x1 beim der ersten wiederholung, als x2 bei der zweiten, usw...
}


function claculate_ingredient() {                                   //führt funktion claculator für zutat 1-12 aus   diese funktion wird in html beim input als onChange ausgeführt



    for (let i = 1; i <= ingredient_count; i++) {                   //


        calculator(i)                                               //wird ausgeführt mit dem parameter 1 beim ersten mal 2 beim zweiten usw...
    }
}


function calculator(y) {                                                    //ändert den wert der zutaten anhand der portionen der parameter y eintscheidet in welcher spalte dies durchgeführt wird
    let Portion_number = document.getElementById('Portion_number').value;   //holt das Value der portionen


    let result = originalValues["x" + y] * Portion_number / 4;                  //rechnet das originalValue[x1-12] mal Portion_Number dur 4 da die orignalzutatenmäne schon für 4 portionen eingetragen wurden
    result = parseFloat(result.toFixed(2));                                 // Rundet das ergebniss auf 2 stellen hinter dem komma
    console.log(result);    

    object["x" + y].innerText = result;                                     //ändert den "innerText" des jebweiligen Zutat object[x1], object[x2] usw...



    return result;
}


/* claculate_ingredient()    */                                                   //sorgt dafür das wenn die seite geladen wird alle zutaten einmal ausgerechnet werden






