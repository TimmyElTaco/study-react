import { useState } from 'react'

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './board'
import { WinnerModal } from './components/Winner'

import confetti from 'canvas-confetti'


function App() {

  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const resetGame = () => {
    setWinner(null);
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
  }

  const updateBoard = (index) => {
    
    if(board[index] || winner) return

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X ;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);

    if(newWinner) {
      confetti();
      setWinner(newWinner);
    } else if(checkEndGame(newBoard)) {
      setWinner(false);
    }
  }
  
  return (
    <main className="board" >
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame} >Resetear el juego</button>
      <section className="game" >
        {
          board.map((_, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                { board[index] }
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={ turn === TURNS.X }> { TURNS.X } </Square>
        <Square isSelected={ turn === TURNS.O }> { TURNS.O } </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
      
    </main>
  )
}

export default App