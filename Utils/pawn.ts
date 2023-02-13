import { log } from "console";
import ChessPiece from "./pieceChess";

class pawn extends ChessPiece{

    firstMove: boolean = true;

    constructor({name, path, color, position}:any) {
        super({name, path, color, position});
    }

    generetePiece = () => {
        const element = document.getElementById(this.position)!;        
        element.innerHTML = `<img src="${this.path}" alt="${this.name} ${this.color}" />`;    
       
        element.addEventListener('click', () => this.previewMove());
    }

    showPositionAvailable = () => {
        this.positionAvailable.map((posicion) => {
            const element = document.getElementById(posicion)!;
            element.innerHTML = `<div ></div>`;
            element.addEventListener('click', () => {
                this.movePiece(this.position, posicion);  
            });
        });
    }

    movePiece = (position: string, nextPosition: string) => {
        this.firstMove = false;
        const piece = this.copyPieceVirtualBoard(position);
        this.deletePieceDom(position);
        this.position = nextPosition;
        this.deletePieceVirtualBoard(position);
        this.addPieceVirtualBoard(nextPosition, piece);
        this.removePositionAvailable();
        this.generetePiece();
    }

    previewMove = () => {


        this.removePositionAvailable();
        this.moveAvailable();
        this.showPositionAvailable();
    }



    moveAvailable = () => {
        const y = this.letterToNumber(this.position[0]);
        const x = parseInt(this.position[1]);
        const position = [];

        if(this.color === 'white') {
            if(this.firstMove)
                position.push(this.numberToLetter(y) + (x + 2));
            
            position.push(this.numberToLetter(y) + (x + 1));        
        } else {
            if (this.firstMove)
                position.push(this.numberToLetter(y) + (x - 2));
            
            position.push(this.numberToLetter(y) + (x - 1));
        }

        this.positionAvailable = position;
    }
}   

export default pawn;