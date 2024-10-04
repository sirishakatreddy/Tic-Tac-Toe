import React, {useState} from "react";
//hooks - useState - from one state to other state 
import './App.css';
function TicTacToe(){
  const [board, setBoard]=useState(Array(9).fill(null));
  const[isXNext,setIsXNext]=useState(true);
  const winner=calculateWinner(board);
  //function to handle clicks which user does 
  //react condition- if 
  function handleClick(index){
    if(winner || board[index]) return;
    //if ther's already a winner no more new clicks- game over 
    const newboard =[...board];//... spread opr- copy array elemnts
    newboard[index]=isXNext?'X':'O';//first player will x 
    setBoard(newboard);
    setIsXNext(!isXNext);//t-->f-->t-->f //x--o--x--o
  }
  //function to render square 
  function renderSquare(index){
    return(
<button className="square" onClick={()=> handleClick(index)}>
  {board[index]} </button>
    );
  }
  //function for reset game 
  function resetGame(){
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }
  return(
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">
      {winner ? `Winner: ${winner}`: `Next Player: ${isXNext ? 'X' : 'O'}`}
      </div>
      <div className="board">
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
         </div>
         <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
         </div>
         <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
         </div>
      </div>
      <button className="reset-btn" onClick={resetGame}>Reset Game</button>
    </div>
  )
}
function calculateWinner(squares){
  const lines=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let line of lines){
    const[a,b,c]=line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
  }
}return null;}
export default TicTacToe;
