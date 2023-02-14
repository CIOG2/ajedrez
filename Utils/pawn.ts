import ChessPiece from "./pieceChess";

class pawn extends ChessPiece{

    firstMove: boolean = true;

    constructor({name, path, color, position}:any) {
        super({name, path, color, position});
    }


    generetePiece = () => {
        const element = document.getElementById(this.position)!;  
        const image = document.createElement('img');
        image.src = this.path;
        image.alt = `${this.name} ${this.color}`;
        image.addEventListener('click', () => this.previewMove());
        
        element.innerHTML = '';      
        element.appendChild(image);
    }


    showPositionAvailable = () => {
        this.positionAvailable.forEach((posicionAvalible) => {
            const element = document.getElementById(posicionAvalible)!;
            const div = document.createElement('div');
            div.addEventListener('click', () => {
                this.movePieceBoard(this.position, posicionAvalible);  
            });

            element.innerHTML = '';
            element.appendChild(div);
        });
    }


    movePieceBoard = (position: string, nextPosition: string) => {
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
        if(this.color === 'white') 
            this.positionAvailable = this.movePiece(this.position, this.color);
        else 
            this.positionAvailable = this.movePiece(this.position, this.color);
    }


    pieceWhiteMove = (position: string) => {
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;
        this.virtualBoard[y][x];
    }


    movePiece = (position: string, color: string) => {
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]);
        const pos:string[] = [];
        
        let onePosition;
        let twoPosition;

        if (color === 'white') {
            //Posiciones a las que se puede mover
            onePosition = this.numberToLetter(y) + (x + 1);
            twoPosition = this.numberToLetter(y) + (x + 2);
        } else {
            //Posiciones a las que se puede mover
            onePosition = this.numberToLetter(y) + (x - 1);
            twoPosition = this.numberToLetter(y) + (x - 2);
        }

        
        //Condicionales para saber si hay una pieza en la posicion
        const conditionOne = this.pieceInThisPosition(onePosition);
        const conditionTwo = this.pieceInThisPosition(twoPosition);
        
        if (this.firstMove && !conditionOne && !conditionTwo)
            pos.push(twoPosition);

        if (!conditionOne)
            pos.push(onePosition);
    
        return [...pos];
    }


    pieceInThisPosition = (position: string) => {
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;
        return (this.virtualBoard[y][x]) ? true : false;
    }
}   

export default pawn;