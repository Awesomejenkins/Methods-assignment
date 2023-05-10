/* Opdracht 0: voorbeeld */
// Check de lengte van onderstaande string en log dit in de terminal
// ---- Verwachte uitkomst: 10

const word = "zoetsappig";
console.log(word.length);


/* Opdracht 1 */
//  Check of het woord "Banaan" langer is dan het woord "Aardappel" en log dit in de terminal.
// ---- Verwachte uitkomst: false

const fruit = "Banaan";
const drink = 'Beer';
const vegetable = "Aardappel";

if (fruit.length > vegetable.length){
    console.log("true");
} else{
    console.log("false");
}




/* Opdracht 2 */
//  Zorg ervoor dat de laatste letter van het woord in fruit en vegetable (hierboven) in de terminal gelogd wordt.
//  Tip: bedenk 1 manier die voor beide woorden zou werken.
// ---- Verwachte uitkomst voor fruit: "n"
// ---- Verwachte uitkomst voor vegetable: "l"

//create function to get last index number
//function has two parameters str1 and str2
function getLastIndexWithChar(str1, str2) {
    //calc the last index and put it in variable
    const lastIndexStr1 = str1.length - 1;
    const lastIndexStr2 = str2.length - 1;
    //return results of getLastIndexWithChar in array of objects, object contains lastIndex and corresponding character
    const result = [
        { index: lastIndexStr1, character: str1[lastIndexStr1] },
        { index: lastIndexStr2, character: str2[lastIndexStr2] }
    ];

    return result;
}
//all that is left is to call the function with fruit and vegetable parameters
const results = getLastIndexWithChar(fruit, vegetable);
console.log(results[0]);  // Output: { index: 5, character: 'n' }
console.log(results[1]);  // Output: { index: 8, character: 'l' }



/* Opdracht 3 */
//  Haal de spaties aan het begin en eind van onderstaande zin weg en log dit in de terminal
// ---- Verwachte uitkomst: "De kat krabt de krullen van de trap"

const userInput = "  De kat krabt de krullen van de trap ";
console.log(userInput.trim());
console.log(userInput);




/* Opdracht 4 */
// Check of het woord "Fantastisch" in onderstaande zin voorkomt en log dit in de terminal.
// ---- Verwachte uitkomst: true

const story = "We vinden de behaalde resultaten werkelijk prachtig. Fantastisch, nietwaar?"

function checkIfIncludes(){
    if (story.includes('Fantastisch')){
        console.log('true');
    } else{
        console.log('false');
    }
}
checkIfIncludes();



/* Opdracht 5 */
// Knip de vraag van deze string af, zodat alleen het eerste gedeelte overblijft en log dit in de terminal.
// ---- Verwachte uitkomst: "We vinden de behaalde resultaten werkelijk prachtig."

//declare function with parameter
function getFirstSentence(){
//    split string in to array with .split methode
    const splitSentence = story.split(' F');

    return splitSentence [0];


}

const firstSentence = getFirstSentence();
console.log(firstSentence);
//result isn't correct because i cant


/* Opdracht 6 */
// Maak van onderstaand bedrag een Nederlands bedrag door het volgende te doen:
// * Vervang het dollar-teken voor een euro-teken
// * Vervang de punt voor een komma
// Log dit in de terminal.
// ---- Verwachte uitkomst: "€35,59"

const price = "$35.59";





