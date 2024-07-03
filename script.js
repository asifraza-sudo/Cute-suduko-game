document.addEventListener('DOMContentLoaded', () => {
    const theSudokuBoard = document.getElementById('the-sudoku-board');
    const theResetButton = document.getElementById('the-reset-button');
    
   
    const thePuzzle = [
        [5, 3, '', '', 7, '', '', '', ''],
        [6, '', '', 1, 9, 5, '', '', ''],
        ['', 9, 8, '', '', '', '', 6, ''],
        [8, '', '', '', 6, '', '', '', 3],
        [4, '', '', 8, '', 3, '', '', 1],
        [7, '', '', '', 2, '', '', '', 6],
        ['', 6, '', '', '', '', 2, 8, ''],
        ['', '', '', 4, 1, 9, '', '', 5],
        ['', '', '', '', 8, '', '', 7, 9]
    ];

    function theCreateBoard(puzzle) {
        theSudokuBoard.innerHTML = '';
        for (let theRow = 0; theRow < 9; theRow++) {
            let theTr = document.createElement('tr');
            for (let theCol = 0; theCol < 9; theCol++) {
                let theTd = document.createElement('td');
                let theInput = document.createElement('input');
                theInput.type = 'text';
                theInput.maxLength = 1;
                if (puzzle[theRow][theCol] !== '') {
                    theInput.value = puzzle[theRow][theCol];
                    theInput.disabled = true;
                }
                theTd.appendChild(theInput);
                theTr.appendChild(theTd);
            }
            theSudokuBoard.appendChild(theTr);
        }
    }

    theResetButton.addEventListener('click', () => {
        theCreateBoard(thePuzzle);
    });

    theCreateBoard(thePuzzle);
});
