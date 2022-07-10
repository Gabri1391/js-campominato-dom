// - Recupero gli elementi DOM
const button = document.getElementById('button');
const pointsCounter = document.getElementById('points-counter');

// FUNZIONI
/**
 * 
 * @param {Node} cell la cella cliccata
 * @param {Number[]} bombs l'array contenente le bombe
 * @returns{boolean} se è game over (true) oppure false
 */
function checkGameOver(cell, bombs){
    const cellNumber = parseInt(cell.innerText);
    //controllo se ha beccato una bomba
    if(bombs.includes (cellNumber)){
        cell.classList.add('bomb');
        console.log('Hai perso! Hai preso una bomba!')
        return true;
    }else{
        cell.classList.add('safe');
        console.log('Ottimo! Continua così!')
        return false;
    }

}

//Generiamo 16 numeri random compresi tra 1 e il numero massimo delle celle
function createBombs(totalBombs, totalCells){
    const bombs = [];
    while(bombs.length < totalBombs){
        let randomNumber;
        do{
            randomNumber = Math.floor(Math.random() * totalCells) + 1;

        }while (bombs.includes(randomNumber));

        bombs.push(randomNumber);
    }

    return bombs;
}

function play (){
    
    //operazioni iniziali
    this.innerText = 'Ricomincia!';
    const grid = document.getElementById('grid');
    grid.classList.remove('none');
    grid.classList.add('active');  
    
    //Svuoto la gliglia a ogni click
    grid.innerHTML = '';
    
    //fase preparatoria
    let userPoints = 0;
    const totalBombs = 16;
    //Punteggio finale
   

    //- Impostazioni della griglia
    const rows = 10;
    const cells = 10;
    const totalCells = rows * cells;

    function createCell (cellNumber) {
    
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerText = cellNumber;

        return cell;
    }

   //Effetttivo svolgimento del gioco
   //Genero le bombe
   const bombs = createBombs(totalBombs, totalCells);
   console.log(bombs)
   

   for(let i = 1; i <= totalCells; i++){
    
    //Genero una cella
    const cell = createCell(i);

    //gestisco il click della cella
    cell.addEventListener('click',function(){
        //la cella diventa non ricliccabile
        if(this.classList.contains('clicked')) return;

        //aggiungo classe click
        this.classList.add('clicked');
        console.log(i)

        //check se la casella è una bomba o no
        const isGameOver = checkGameOver (this, bombs);
        if(!isGameOver)userPoints++;
    })

    //appendo la cella alla griglia
    grid.appendChild(cell);
   }


};


// - Aggiungo l'evento al click del bottone

button.addEventListener('click',play);






