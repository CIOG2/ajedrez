import ChessPiece from './pieceChess';
import pawn from './pawn';
import { pieceChess } from '@interfaces/index';

class game{
    virtualBoard:any[] = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    startGame(data:pieceChess[]) {
        data.map((piece) => {
            piece.initialPosition.map((position) => {
                this.assignPosition(piece, position);            
            });
        });
        
        const button = document.querySelector('#buttonStart');
        button?.remove();    
        console.table(this.virtualBoard);
    }

    assignPosition({name, path, color}:pieceChess, position:string) {
        
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;
        let piece;

        if (name === 'pawn') {
            piece = new pawn({name, path, color, position});
            piece.generetePiece();
        }else{
            piece = new ChessPiece({name, path, color, position});
        }
        
        this.virtualBoard[y][x] = piece;
        piece.updateVirtualBoard(this.virtualBoard);    
    }

    numberToLetter = (number: number) => ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'][number];    
    letterToNumber = (letter:string) => ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].indexOf(letter);
}

export default game;