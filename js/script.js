// - Recupero gli elementi DOM
const grid = document.getElementById('grid');
const button = document.getElementById('button');
const pointsCounter = document.getElementById('points-counter');


//MILESTONE 2
//Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

// FUNZIONI
const  createCell = content =>{
    const cell = document.createElement('div');
    cell.innerText = content;
    cell.className = 'cell';
    grid.appendChild(cell);

    return cell;
}

//Generiamo 16 numeri random compresi tra 1 e il numero massimo delle celle
let min = 1;
let max= 100;


function generateRandomNumber (min,max) {
   const randomNumber = Math.floor(Math.random() * (max +1 - min) + min);
  return randomNumber
}

const bombNumbers = [];

while (bombNumbers.length < 16) {
   let number = generateRandomNumber(min,max)
   if(!bombNumbers.includes(number)) {
    bombNumbers.push(number);
   }
}

console.log(bombNumbers)

//- Impostazioni della griglia
const row = 10;
const cells = 10;
const totalCells = row * cells;

let userPoints = 0;



// -Ciclo for per creare 100 celle all'interno della griglia più
//incremento del punteggio in base a quante celle clicco

for (i = 1; i <= totalCells; i++) {
    let newCell = createCell(i);

    newCell.addEventListener('click',function(increment){

        if (newCell.classList.contains('clicked')){

            return;
        }else{
            this.classList.add('clicked');
            console.log("Cell: " + this.innerText);
        }

        userPoints++;
        pointsCounter.innerText = `Punteggio: ${userPoints}`;
    } )
}

// - Aggiungo l'evento al click del bottone

button.addEventListener('click', function () {

    grid.classList.remove('none');
    grid.classList.add('active');

});

