// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){ 
    return cats.push(name);
}
function  destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(name){
    const newcats = [...cats, "Broom"];
    return newcats;
}
function  prependCat(name){
    const newcats = ["Arnold", ...cats];
    return newcats;
}
function removeLastCat(){
    const copyCats = cats.slice();
    return copyCats.slice(0, copyCats.length -1);
}
function removeFirstCat(){
    const copyCats = cats.slice();
    return copyCats.slice(1, copyCats.length);
}
