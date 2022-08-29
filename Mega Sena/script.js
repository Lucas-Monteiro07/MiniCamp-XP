let state = {
     board: [],
     currentGame: [],
     savedGames: []
};

function start(){
    createBoard();
    newGame();
    render();
}

function createBoard() {
    state.board = [];
    for (var i = 1; i <= 60; i++){
        state.board.push(i);
    }
};

function newGame() {
    resetGame();
    console.log(state.currentGame);
};

function render(){
    renderBoard()
    renderButtons()
    renderSavedGames()
}

function renderBoard(){
    var divBoard = document.querySelector('#numeros');
    divBoard.innerHTML = '';

    var ulNumbers = document.createElement('ul');

    for (var i = 0; i < state.board.length; i++){
        var currentNumber = state.board[i];

        var li = document.createElement('li');
        li.innerHTML = currentNumber.toString().padStart(2, '0')

        li.addEventListener('click', handleNumberClick);

        if (numberCheck(currentNumber)){
            li.classList.add('selected');
        }
        
        ulNumbers.appendChild(li);
    }

    divBoard.appendChild(ulNumbers);
}

function handleNumberClick(event){
    var gameNumber = Number(event.currentTarget.innerHTML)
    if (numberCheck(gameNumber)){
        removeNumber(gameNumber);
    }else{
        addNumber(gameNumber);
    }
    render();
}

function renderSavedGames(){
}

function renderButtons(){
    renderNewGameButton()
    renderRandomGameButton()
    renderSavedGamesButton()
}

function renderNewGameButton() {
    var divBotao = document.querySelector('#botao');
    divBotao.innerHTML = ''
    var button  = document.createElement('button');
    button.innerHTML = 'New Game';
    divBotao.appendChild(button);
    button.addEventListener('click', handleNewGameClick);
}

function handleNewGameClick() {
    newGame();
    render();
}

function renderRandomGameButton(){
    let divBotao = document.querySelector('#botao');
    var button  = document.createElement('button');
    button.innerHTML = 'Random Game';
    divBotao.appendChild(button);
    button.addEventListener('click', handleRandomGameClick);
}

function handleRandomGameClick() {
    resetGame();
    var board2 = state.board;
    state.currentGame = randomGame(board2, 6);
    render();
    return console.log(state.currentGame);
}



function randomGame(arr, size) {
    var shuffled = arr.slice(0)
    var i = arr.length;
    var min = i - size;
    var temp;
    var index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }       
    return shuffled.slice(min);
}

function renderSavedGamesButton(){
    var divBotao = document.querySelector('#botao');
    var button  = document.createElement('button');
    button.innerHTML = 'Save Games';
    divBotao.appendChild(button);
    button.disabled = !gameComplete();
    button.addEventListener('click', handleSaveGameClick);
}

function handleSaveGameClick() {
    saveGame();    
    var divSavedGames = document.querySelector('#jogos-salvos');
    var SavedGamesRender = document.createElement('div');
    SavedGamesRender.innerHTML = `Jogos salvos: ${state.savedGames}`;
    divSavedGames.appendChild(SavedGamesRender);
    newGame();
    render();
}

function addNumber(number){
    if (number < 1 || number > 60){
        return console.error('Número Inválido', number);
    }

    if (state.currentGame.length >= 6){
        return console.error('Jogo já está completo!');
    }

    if (numberCheck(number)){
        return console.error('O número já está inserido no jogo');
    }
     
    return state.currentGame.push(number), console.log(state.currentGame);
}

function removeNumber(numberRemoved){
    if (numberRemoved < 1 || numberRemoved > 60){
        return console.error('Número Inválido', numberRemoved);
    }    
    var game = []
    for (var i = 0; i < state.currentGame.length; i++){
        var currentNumber = state.currentGame[i]
        if (currentNumber === numberRemoved){
            continue
        }
        game.push(currentNumber)
    }

    state.currentGame = game
    console.log(state.currentGame);
}

function numberCheck(numberGame){
    return state.currentGame.includes(numberGame)
}

function saveGame(){
    if (!gameComplete()){
        return console.error('O jogo não está completo');
    }

    state.savedGames.push(state.currentGame);
    console.log(state.savedGames);
}

function gameComplete(){
    return state.currentGame.length === 6;
}
 
function resetGame() {
    return state.currentGame = []
}
start()
