window.addEventListener('load',function() {

    let turn = 'X';
    let gameOver = false;
    //Function to change turn
    const changeTurn =() =>{
        return turn === 'X'?'0':'X';
    }
    
    //Function to win the game
    const checkWin =() =>{
        let boxes = document.getElementsByClassName('box-text');

        let win = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

         win.forEach(e => {
             if (boxes[e[0]].innerText === boxes[e[1]].innerText && boxes[e[0]].innerText === boxes[e[2]].innerText && boxes[e[0]].innerText !== '') {
                gameOver = true;
                document.getElementById('info').innerText = 'Player ' + boxes[e[0]].innerText + ' won';
                document.getElementById('celebration').style.width = '12rem';
             }
         });
    }
    
    //Function for game
    
    let boxs = document.getElementsByClassName('box');
    Array.from(boxs).forEach(element=> {
        let boxText = element.querySelector('.box-text');
        element.addEventListener('click',()=> {
            if(boxText.innerText === ''){
                boxText.innerText = turn;
                turn = changeTurn();
                checkWin();
                if (!gameOver) {
                    document.getElementById('info').innerText = "Turn for "+turn;
                }
                
            }
        })
    })

    //Resetting the game
    let reset = document.getElementById('reset');
    reset.addEventListener('click',function() {
        let box = document.getElementsByClassName('box');
        Array.from(boxs).forEach(element=> {
            let boxText = element.querySelector('.box-text');
            boxText.innerText = '';
    })
    document.getElementById('info').innerText = "Turn for "+turn;
    document.getElementById('celebration').style.width = '0%';

})

})
