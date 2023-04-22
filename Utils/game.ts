import pawn from './pawn';
import horse from './horse';
import bishop from './bishop';
import tower from './tower';
import queen from './queen';
import king from './king';
import { pieceChess } from '@interfaces/index';

const piecesChess = [
    pawn,
    horse,
    bishop,
    tower,
    queen,
    king,
]

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

    letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    startGame(data:pieceChess[]) {
        data.map((piece) => {
            piece.initialPosition.map((position) => {
                this.assignPosition(piece, position);            
            });
        });
        
        const button = document.querySelector('#buttonStart');
        button?.remove();    
    }


    assignPosition({name, path, color}:pieceChess, position:string) {
        
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;     


        const classConstructor = piecesChess.filter((piece: Function) => piece.name === name)[0];
        const piece = new classConstructor({name, path, color, position})


        if (piece) {
            piece.generetePiece();
            this.virtualBoard[y][x] = piece;
            piece.updateVirtualBoard(this.virtualBoard);                
        }
    }

    numberToLetter = (number: number) => this.letters[number];    
    letterToNumber = (letter:string) => this.letters.indexOf(letter);
}

export default game;