import Square from './Square.jsx';
import React from 'react';

class Board extends React.Component {

    renderSquare(i) {
      return (
        <Square
          key={i}
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }

    renderRow(arr){
      
      return arr.map((item,index) => <div className="board-row" key={index}>
                      {item.map((elem) => this.renderSquare(elem))}
                     </div>);
    }

    render() {
      return (
        <div>
          {this.renderRow([[0,1,2], [3,4,5], [6,7,8]])}
        </div>
      );
    }
  }

export default Board 