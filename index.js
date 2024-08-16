function rollDice(){
    let randomNumbr = Math.floor(Math.random() * 6) + 1;
    let imegeSorce = 'image/' + randomNumbr + '.png';
    document.getElementById('ludo').src = imegeSorce;
}