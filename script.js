let board = new Array(3);
for (let i = 0; i < board.length; i++) {
    board[i] = new Array(3)
    for (let j = 0; j < board.length; j++) {
        board[i][j] = '';
    }
}
function creatBoard() {
    const boardGame = document.querySelector('.boardGame');
    let index = 0;
    let table = `<table>`
    for (let i = 0; i < 3; i++) {
        table += `<tr>`;
        for (let j = 0; j < 3; j++) {
            index++;
            table += `<td id="${index}" onclick="playerMove(${i}, ${j})">${board[i][j]}</td>`

        }
        table += `</tr>`
    }
    table += `</table>`
    boardGame.innerHTML = table
}



function playerMove(row, col) {
    let isPlayer = 'true';
    if (isPlayer && board[row][col] === '') {
        board[row][col] = 'X';
        isPlayer = false;
        creatBoard();
        if (checkWin('X')) {
            alert("Bạn đã chiến thắng!!!")
            resetGame();
        } else  if (checkHoa()) {
            alert("Hòa");
            resetGame();
        } else {
            computerMove()
            isPlayer = true;
        }
       
      
    }
}
function computerMove() {
    let isComputer = false;
    for (let i = 0; i < 3 && !isComputer; i++) {
        for (let j = 0; j < 3 && !isComputer; j++) {
            if (board[i][j] === '') {
                board[i][j] = "O";
                isComputer = true;
            }
        }
    }
    creatBoard();
    if (checkWin('O')) {
        alert('Máy đã chiến thắng!!!')
        resetGame();
    }

}


function checkWin(value) {
    let win = [[1, 2, 3], [4, 5, 6],
                [7, 8, 9], [1, 5, 9],
                [3, 5, 7], [1, 4, 7],
                [2, 5, 8], [3, 6, 9]]

    for (let i = 0; i < win.length; i++) {
        if (document.getElementById(win[i][0]).textContent === value
            && document.getElementById(win[i][1]).textContent === value
            && document.getElementById(win[i][2]).textContent === value
        ) {
            return true
        }

    }
    return false
}

function checkHoa() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === "") {
                return false
            }
        }
    }
    return true
}

function resetGame() {

    let tdElements = document.querySelectorAll('.boardGame td')
    for (const tdElement of tdElements) {
        tdElement.textContent = "";
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            board[i][j] = '';
        }
    }
}

creatBoard();




