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
      let i = 0;
      arr = arr.map((item) => <div className="board-row" key={i++}>
                      {item.map((elem) => this.renderSquare(elem))}
                     </div>);
      return arr
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