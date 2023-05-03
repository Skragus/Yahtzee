let rollButton = document.getElementById("rollButton");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");
let dice4 = document.getElementById("dice4");
let dice5 = document.getElementById("dice5");
let rollCountDiv = document.getElementById("rollCnt")
let roundCountDiv = document.getElementById("roundCnt")

let toggle = 0, d1Roll,d2Roll,d3Roll,d4Roll,d5Roll,gameActive = false
let rollCount = 0, diceArr = new Array(5), temp, tempstring, uniq, cellSelected
let roundCount = 0
let aTable = document.getElementById("aTable");
let bTable = document.getElementById("bTable");

//adds hidden class to all die
function clearDice(dice) {
  for (var i = 0; i < 9; i++) {
    dice.children[i].classList.add("hidden")
  }
}

//DOM for displaying the dice
function displayOne(dice) { 
  clearDice(dice)
  dice.children[4].classList.remove("hidden");
}
function displayTwo(dice) { 
  clearDice(dice) 
  dice.children[0].classList.remove("hidden");
  dice.children[8].classList.remove("hidden");
}
function displayThree(dice) { 
  clearDice(dice) 
  dice.children[0].classList.remove("hidden");
  dice.children[4].classList.remove("hidden");
  dice.children[8].classList.remove("hidden");
}
function displayFour(dice) {
  clearDice(dice) 
  dice.children[0].classList.remove("hidden");
  dice.children[2].classList.remove("hidden");
  dice.children[6].classList.remove("hidden");
  dice.children[8].classList.remove("hidden");
}
function displayFive(dice) { 
  clearDice(dice)
  dice.children[0].classList.remove("hidden");
  dice.children[2].classList.remove("hidden");
  dice.children[6].classList.remove("hidden");
  dice.children[8].classList.remove("hidden");
  dice.children[4].classList.remove("hidden");
}
function displaySix(dice) { 
  clearDice(dice)
  dice.children[0].classList.remove("hidden");
  dice.children[2].classList.remove("hidden");
  dice.children[3].classList.remove("hidden");
  dice.children[5].classList.remove("hidden");
  dice.children[6].classList.remove("hidden");
  dice.children[8].classList.remove("hidden");
}

//decides which die to display based on roll
function displayDie(roll, die) {
  switch(roll) {
    case 1:   
      displayOne (die) 
      break; 
    case 2:
      displayTwo (die)
      break; 
    case 3:
      displayThree (die)
      break;
    case 4:  
      displayFour (die)
      break; 
    case 5:
      displayFive (die)
      break; 
    case 6:
      displaySix (die)
      break;
  }
}

function rollDie () {
  if (!dice1.classList.contains("held")){
    d1Roll = Math.ceil(Math.random() * 6)
    diceArr[0]=d1Roll
    shakeAnimation(dice1)
    setTimeout(() => {displayDie(d1Roll, dice1)}, 50);
  }
  if (!dice2.classList.contains("held")){
    d2Roll = Math.ceil(Math.random() * 6)
    diceArr[1]=d2Roll
    shakeAnimation(dice2)
    setTimeout(() => {displayDie(d2Roll, dice2)}, 50);
  }
  if (!dice3.classList.contains("held")){
    d3Roll = Math.ceil(Math.random() * 6)
    diceArr[2]=d3Roll
    shakeAnimation(dice3)
    setTimeout(() => {displayDie(d3Roll, dice3)}, 50);
  }
  if (!dice4.classList.contains("held")){
    d4Roll = Math.ceil(Math.random() * 6)
    diceArr[3]=d4Roll
    shakeAnimation(dice4)
    setTimeout(() => {displayDie(d4Roll, dice4)}, 50);
  }
  if (!dice5.classList.contains("held")){
    d5Roll = Math.ceil(Math.random() * 6)
    diceArr[4]=d5Roll
    shakeAnimation(dice5)
    setTimeout(() => {displayDie(d5Roll, dice5)}, 50);
  }
}

//adds held class to die which are clicked
function holdDie (dice) {
  dice.classList.contains("held") ? dice.classList.remove("held") :dice.classList.add("held");
}

function shakeAnimation(dice) {
  dice.classList.add('shake');
  setTimeout(() => {
    dice.classList.remove('shake')
  }, 100);
}

let sumscore, Atotal

class Player {
  constructor(score) {
    this.score = score
  }
  
  checkBonus(score) {
    sumscore = score.aces + score.twos + score.threes + score.fours + score.fives + score.sixes
    if(sumscore >= 63){
      score.bonus = 35
    }
  }
}

const playerScore = {
  aces: 0,
  twos: 0,
  threes: 0,
  fours: 0,
  fives: 0,
  sixes: 0,
  bonus:0,
  toak: 0,
  foak: 0,
  fhouse: 0,
  sstraight: 0,
  lstraight: 0,
  yahtzee: 0,
  chance: 0,
}

let player1 = new Player(playerScore)

let tableA = {
  aces: 0,
  twos: 0,
  threes: 0,
  fours: 0,
  fives: 0,
  sixes: 0
}
let tableB = {
  toak: 0,
  foak: 0,
  fhouse: 0,
  sstraight: 0,
  lstraight: 0,
  yahtzee: 0,
  chance: 0,
}

//sums occurances of a n
function sumNums (array, n) {
  let counter = 0
  for (num of array) {
    if (num == n) {
      counter++;
    }
  }
  return counter*n
}
//checks if 3oak/4oak/5oak/fullhouse
function checkToak(array){
  if(array[0]==array[2] || array[1]==array[3] || array[2]==array[4]){
    return true
  } else {
    return false
  }
}
function checkFoak(array){
  if(array[0]==array[3] || array[1]==array[4]){
    return true
  } else {
    return false
  }
}
function checkYahtzee(array){
  if(array[0]==array[4]){
    return true
  } else {
    return false
  }
}
function checkFullhouse(array){
  if(((array[0] == array[1]) && (array[2] == array[4])) || (array[0] == array[2]) && (array[3] == array[4])){
    return true
  } else {
    return false
  }
}
//checks for straights
function checkSmallS(array){
  if(String(array).includes('4,3,2,1')){
    return true 
  } else if (String(array).includes('5,4,3,2')){
    return true 
  } else if (String(array).includes('6,5,4,3')){
    return true 
  } else {
    return false
  }
}
function checkLargeS(array){
  if(String(array).includes('5,4,3,2,1')){
    return true 
  } else if (String(array).includes('6,5,4,3,2')){
    return true 
  } else {
    return false
  }
}

//calculates score
function calcTable(array){
  tableA.aces = sumNums(array, 1)
  tableA.twos = sumNums(array, 2)
  tableA.threes = sumNums(array, 3)
  tableA.fours = sumNums(array, 4)
  tableA.fives = sumNums(array, 5)
  tableA.sixes = sumNums(array, 6)
  if(checkToak(temp)){
    tableB.toak = array.reduce((a, b) => a + b)
  } else {
    tableB.toak = 0
  }
  if(checkFoak(temp)){
    tableB.foak = array.reduce((a, b) => a + b)
  } else {
    tableB.foak = 0
  }
  if(checkToak(temp) && checkFullhouse(temp)){
    tableB.fhouse = 25
  } else {
    tableB.fhouse = 0
  }
  if (checkSmallS(uniq)==true){
    tableB.sstraight = 30
  } else {
    tableB.sstraight = 0
  }
  if (checkLargeS(temp)==true){
    tableB.lstraight = 40
  } else {
    tableB.lstraight = 0
  }
  if(checkYahtzee(temp)==true){
    tableB.yahtzee = 50
  } else {
    tableB.yahtzee = 0
  }
  tableB.chance = array.reduce((a, b) => a + b) 
}
//displays placeholder score onto table
function displayTable() {
  //P1
  aTable.rows[1].cells[2].innerHTML = String(tableA.aces)//aces
  aTable.rows[2].cells[2].innerHTML = String(tableA.twos)//twos
  aTable.rows[3].cells[2].innerHTML = String(tableA.threes)//threes
  aTable.rows[4].cells[2].innerHTML = String(tableA.fours)//fours
  aTable.rows[5].cells[2].innerHTML = String(tableA.fives)//fives
  aTable.rows[6].cells[2].innerHTML = String(tableA.sixes)//sixes
  aTable.rows[7].cells[2].innerHTML = '0'//bonus 

  aTable.rows[8].cells[2].innerHTML = '0'//atotal
  

  bTable.rows[1].cells[2].innerHTML = String(tableB.toak)//3OAK
  bTable.rows[2].cells[2].innerHTML = String(tableB.foak)//4OAK
  bTable.rows[3].cells[2].innerHTML = String(tableB.fhouse)//FH
  bTable.rows[4].cells[2].innerHTML = String(tableB.sstraight)//SS
  bTable.rows[5].cells[2].innerHTML = String(tableB.lstraight)//LS
  bTable.rows[6].cells[2].innerHTML = String(tableB.yahtzee)//Yahtzee
  bTable.rows[7].cells[2].innerHTML = String(tableB.chance)//chance

  bTable.rows[8].cells[2].innerHTML = '0'   //btotal

//P2
  aTable.rows[1].cells[3].innerHTML = '0'//aces
  aTable.rows[2].cells[3].innerHTML = '0'//twos
  aTable.rows[3].cells[3].innerHTML = '0'//threes
  aTable.rows[4].cells[3].innerHTML = '0'//fours
  aTable.rows[5].cells[3].innerHTML = '0'//fives
  aTable.rows[6].cells[3].innerHTML = '0'//sixes
  aTable.rows[7].cells[3].innerHTML = '0'//bonus

  aTable.rows[8].cells[3].innerHTML = '0'//atotal
  
  bTable.rows[1].cells[3].innerHTML = '0'//3OAK
  bTable.rows[2].cells[3].innerHTML = '0'//4OAK
  bTable.rows[3].cells[3].innerHTML = '0'//FH
  bTable.rows[4].cells[3].innerHTML = '0'//SS
  bTable.rows[5].cells[3].innerHTML = '0'//LS
  bTable.rows[6].cells[3].innerHTML = '0'//Yahtzee
  bTable.rows[7].cells[3].innerHTML =  //chance

  bTable.rows[8].cells[3].innerHTML = '0'   //btotal
  
}
function clearTable() {

}


function playGame() { 
  gameActive = true
  rollCount++
  if(rollCount < 40){
    rollDie()
    rollCountDiv.innerText = `${rollCount}/3`
  };
  //used to check for 3-5 of a kinds
  temp = [...diceArr].sort().reverse()
  //used to check for straights
  uniq = [...new Set(temp)]

  calcTable(diceArr)
  displayTable()
}

rollButton.onclick = () => playGame();

displayTable()

dice1.onclick = () => {if(gameActive==true){holdDie(dice1)}}
dice2.onclick = () => {if(gameActive==true){holdDie(dice2)}}
dice3.onclick = () => {if(gameActive==true){holdDie(dice3)}}
dice4.onclick = () => {if(gameActive==true){holdDie(dice4)}}
dice5.onclick = () => {if(gameActive==true){holdDie(dice5)}}

//aTable.rows[3].cells[2].classList.add("held")
function clearRows(){
  aTable.rows[1].cells[2].classList.remove("held")
  aTable.rows[2].cells[2].classList.remove("held")
  aTable.rows[3].cells[2].classList.remove("held")
  aTable.rows[4].cells[2].classList.remove("held")
  aTable.rows[5].cells[2].classList.remove("held")
  aTable.rows[6].cells[2].classList.remove("held")

  bTable.rows[1].cells[2].classList.remove("held")
  bTable.rows[2].cells[2].classList.remove("held")
  bTable.rows[3].cells[2].classList.remove("held")
  bTable.rows[4].cells[2].classList.remove("held")
  bTable.rows[5].cells[2].classList.remove("held")
  bTable.rows[6].cells[2].classList.remove("held")
}

let heldScore

aTable.rows[1].onclick = () => {
  if(gameActive==true) {
    if(aTable.rows[1].cells[2].classList.contains("held")) {
      aTable.rows[1].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = aTable.rows[1].cells[2]
      aTable.rows[1].cells[2].classList.add("held")
    }
  }
}
aTable.rows[2].onclick = () => {
  if(gameActive==true) {
    if(aTable.rows[2].cells[2].classList.contains("held")) {
      aTable.rows[2].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = aTable.rows[2].cells[2]
      aTable.rows[2].cells[2].classList.add("held")
    }
  }
}
aTable.rows[3].onclick = () => {
  if(gameActive==true) {
    if(aTable.rows[3].cells[2].classList.contains("held")) {
      aTable.rows[3].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = aTable.rows[3].cells[2]
      aTable.rows[3].cells[2].classList.add("held")
    }
  }
}
aTable.rows[4].onclick = () => {
  if(gameActive==true) {
    if(aTable.rows[4].cells[2].classList.contains("held")) {
      aTable.rows[4].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = aTable.rows[4].cells[2]
      aTable.rows[4].cells[2].classList.add("held")
    }
  }
}
aTable.rows[5].onclick = () => {
  if(gameActive==true) {
    if(aTable.rows[5].cells[2].classList.contains("held")) {
      aTable.rows[5].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = aTable.rows[5].cells[2]
      aTable.rows[5].cells[2].classList.add("held")
    }
  }
}
aTable.rows[6].onclick = () => {
  if(gameActive==true) {
    if(aTable.rows[6].cells[2].classList.contains("held")) {
      aTable.rows[6].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = aTable.rows[6].cells[2]
      aTable.rows[6].cells[2].classList.add("held")
    }
  }
}

bTable.rows[1].onclick = () => {
  if(gameActive==true) {
    if(bTable.rows[1].cells[2].classList.contains("held")) {
      bTable.rows[1].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = bTable.rows[1].cells[2]
      bTable.rows[1].cells[2].classList.add("held")
    }
  }
}
bTable.rows[2].onclick = () => {
  if(gameActive==true) {
    if(bTable.rows[2].cells[2].classList.contains("held")) {
      bTable.rows[2].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = bTable.rows[2].cells[2]
      bTable.rows[2].cells[2].classList.add("held")
    }
  }
}
bTable.rows[3].onclick = () => {
  if(gameActive==true) {
    if(bTable.rows[3].cells[2].classList.contains("held")) {
      bTable.rows[3].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = bTable.rows[3].cells[2]
      bTable.rows[3].cells[2].classList.add("held")
    }
  }
}
bTable.rows[4].onclick = () => {
  if(gameActive==true) {
    if(bTable.rows[4].cells[2].classList.contains("held")) {
      bTable.rows[4].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = bTable.rows[4].cells[2]
      bTable.rows[4].cells[2].classList.add("held")
    }
  }
}
bTable.rows[5].onclick = () => {
  if(gameActive==true) {
    if(bTable.rows[5].cells[2].classList.contains("held")) {
      bTable.rows[5].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = bTable.rows[5].cells[2]
      bTable.rows[5].cells[2].classList.add("held")
    }
  }
}
bTable.rows[6].onclick = () => {
  if(gameActive==true) {
    if(bTable.rows[6].cells[2].classList.contains("held")) {
      bTable.rows[6].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = bTable.rows[6].cells[2]
      bTable.rows[6].cells[2].classList.add("held")
    }
  }
}
bTable.rows[7].onclick = () => {
  if(gameActive==true) {
    if(bTable.rows[7].cells[2].classList.contains("held")) {
      bTable.rows[7].cells[2].classList.remove("held")
    } else {
      clearRows()
      heldScore = bTable.rows[7].cells[2]
      bTable.rows[7].cells[2].classList.add("held")
    }
  }
}


buttonSubmit.onclick = () => {
  if (gameActive == true && roundCount < 13){
    heldScore
    
    gameActive = false
    clearRows()
    rollCount = 0
    roundCount++ 
    rollCountDiv.innerText = `${rollCount}/3`
    roundCountDiv.innerText = `${roundCount}/13`
    diceArr = new Array(5)
    displayDie(1, dice1)
    displayDie(1, dice2)
    displayDie(1, dice3)
    displayDie(1, dice4)
    displayDie(1, dice5)
    tableA = {
      aces: 0,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 0
    }
    tableB = {
      toak: 0,
      foak: 0,
      fhouse: 0,
      sstraight: 0,
      lstraight: 0,
      yahtzee: 0,
      chance: 0,
    }
    displayTable()
  }
}
