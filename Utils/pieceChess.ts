import pieceChessDom from "./pieceChessDom";
// import { pieceChess } from "@interfaces/pieceChess";
interface constructorChess {
    name: string;
    path: string;
    color: string;
    position: string;

}

class ChessPiece extends pieceChessDom{
    virtualBoard:any[] = [];
    positionAvailable: string[] = [];
    positionAvailableEat: string[] = [];
    color: string = '';
    name: string = '';
    path: string = '';
    position: string = '';

    letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    constructor({name, path, color, position}: constructorChess) {
        super();
        this.name = name;
        this.path = path;
        this.color = color;
        this.position = position;
    }


    movePieceBoard = (position: string, nextPosition: string, generarPieza:any) => {
        const piece = this.copyPieceVirtualBoard(position);
        this.deletePieceDom(position);
        this.position = nextPosition;
        this.deletePieceVirtualBoard(position);
        this.addPieceVirtualBoard(nextPosition, piece);
        this.removePositionAvailable();
        this.removePositionAvailableToEat();
        generarPieza();
        console.table(this.virtualBoard);
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


    pieceInThisPosition = (position: string) => {
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;

        if (y < 0 || y > 7 || x < 0 || x > 7)
            return false;

        return (this.virtualBoard[y][x]) ? true : false;
    }


    pieceAvalibleToEat = (position: string) => {
        if (this.pieceInThisPosition(position)) {
            const y = this.letterToNumber(position[0]);
            const x = parseInt(position[1]) - 1;
            if (this.virtualBoard[y][x].color !== this.color)
                this.positionAvailableEat.push(position);
        }
    }

    diagonalMove = (position: string, color: string) => {
        this.positionAvailable = [];
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;
        const moves = [
            //upRight
            {y: 1, x: 1},
            //upLeft
            {y: 1, x: -1},
            //downRight
            {y: -1, x: 1},
            //downLeft
            {y: -1, x: -1} 
        ]
    
        moves.forEach((move) => {
            this.diagonalCalculate(y, x, move.y, move.x);
        })
    }

    diagonalCalculate = (y:number, x:number, moveY:number, moveX:number ) => {
        let canYouMove = true;
        
        while(canYouMove) {
            y += moveY;
            x += moveX;

            if (y < 0 || y > 7 || x < 0 || x > 7)
                canYouMove = false;
            else{        
                const position = `${this.numberToLetter(y)}${x + 1}`;
                if (this.pieceInThisPosition(position)) {
                    canYouMove = false;
                    this.pieceAvalibleToEat(position);
                } 
                else 
                    this.positionAvailable.push(position);
            }
        }
        

        this.positionAvailable;
    }


    
    numberToLetter = (number: number) => this.letters[number];    
    
    letterToNumber = (letter:string) => this.letters.indexOf(letter);
    
    updateVirtualBoard = (virtualBoard:any[][]) => this.virtualBoard = virtualBoard;
}

export default ChessPiece;