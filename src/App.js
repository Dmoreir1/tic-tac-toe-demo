import './App.css';
import Game from './Game'


function Square({value, onSquareClick}) {
  return (
    
    <div>Carisma and Dan's Tic Tac Toe Board 
      <Game></Game>
    </div>
      // <button className='square' onClick = {onSquareClick}>{value}</button>   
    
  );
}

export default Square;
