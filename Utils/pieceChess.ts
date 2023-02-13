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

     constructor({name, path, color, position}: constructorChess) {
        this.name = name;
        this.path = path;
        this.color = color;
        this.position = position;
    }

    deletePieceDom = (position: string) => {
        const element = document.getElementById(position)!;
        element.innerHTML = '';
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

    copyPieceVirtualBoard = (position: string) =>{
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;
        return this.virtualBoard[y][x];
    }
    

    removePositionAvailable = () => {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

        letters.map((letter) => {
            for (let i = 1; i <= 8; i++) {
                const element = document.getElementById(`${letter}${i}`)!;
                const child = element.querySelector('div');
                if (child) child.remove();
            }
        })

    }

    numberToLetter = (number: number) => ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'][number];    
    
    letterToNumber = (letter:string) => ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].indexOf(letter);
    
    updateVirtualBoard = (virtualBoard:any[][]) => this.virtualBoard = virtualBoard;
}

export default ChessPiece;