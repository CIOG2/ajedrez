import game from "./game";

// import { pieceChess } from "@interfaces/pieceChess";
interface constructorChess {
    name: string;
    path: string;
    color: string;
    position: string;

}

class ChessPiece{
    virtualBoard:any[] = [];
    positionAvailable: string[] = [];
    positionAvailableEat: string[] = [];
    color: string = '';
    name: string = '';
    path: string = '';
    position: string = '';

    letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

     constructor({name, path, color, position}: constructorChess) {
        this.name = name;
        this.path = path;
        this.color = color;
        this.position = position;
    }

    deletePieceDom = (position: string) => {
        const element = document.getElementById(position)!;
        const child = element.childElementCount > 0 ? element.children[0] : null;
        if (child) child.remove();
    }

    deletePieceVirtualBoard = (position: string) => {
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;
        this.virtualBoard[y][x] = 0;
    }

    addPieceVirtualBoard = (position: string, piece: {}) => {
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;
        this.virtualBoard[y][x] = piece;
    }

    copyPieceVirtualBoard = (position: string) => {
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;
        return this.virtualBoard[y][x];
    }

    removePositionAvailable = () => {
        const avalibleMoves = document.querySelectorAll('.position__available');
        
        if (avalibleMoves) 
            avalibleMoves.forEach((element) => element.remove());

        const pieceSelet = document.querySelector('.piece__selected--to-move');
        if (pieceSelet) pieceSelet.remove();
    }
    
    pieceSelected = (position: string) => {
        const piece = document.getElementById(position);
        const pieceSelected = document.createElement('div');
        pieceSelected.classList.add('piece__selected--to-move');
        piece?.appendChild(pieceSelected);
    }

    removePositionAvailableToEat = () => {
        const avalibleMoves = document.querySelectorAll('.position__available--eat');
        
        if (avalibleMoves) 
            avalibleMoves.forEach((element) => element.remove());
    }
    
    numberToLetter = (number: number) => this.letters[number];    
    
    letterToNumber = (letter:string) => this.letters.indexOf(letter);
    
    updateVirtualBoard = (virtualBoard:any[][]) => this.virtualBoard = virtualBoard;
}

export default ChessPiece;