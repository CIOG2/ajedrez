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
        image.classList.add('image__piece');
        image.addEventListener('click', () => this.previewMove());

        // const div = document.createElement('div');
        // div.classList.add('piece__selected--to-move');
        // element.appendChild(div);

        element.innerHTML = '';      
        element.appendChild(image);
    }


    showPositionAvailable = () => {
        this.positionAvailable.forEach((posicionAvalible) => {
            const element = document.getElementById(posicionAvalible)!;
            const div = document.createElement('div');
            div.classList.add('position__available');
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
        this.removePositionAvailableToEat();
        this.generetePiece();
        console.table(this.virtualBoard);
    }


    previewMove = () => {

        this.removePositionAvailable();
        this.removePositionAvailableToEat();
        this.moveAvailable();
        this.showPositionAvailable();
    }


    moveAvailable = () => {    
        this.pieceSelected(this.position);

        if(this.color === 'white'){
            this.positionAvailable = this.movePiece(this.position, this.color);
            this.checkPositionAvailableEat();
        }
        else{
            this.positionAvailable = this.movePiece(this.position, this.color);
            this.checkPositionAvailableEat();
        } 
    }


    pieceWhiteMove = (position: string) => {
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;
        this.virtualBoard[y][x];
    }


    movePiece = (position: string, color: string) => {
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;
        const pos:string[] = [];
        
        let onePosition;
        let twoPosition;

        if (color === 'white') {
            //Posiciones a las que se puede mover
            onePosition = this.numberToLetter(y) + (x + 2);
            twoPosition = this.numberToLetter(y) + (x + 3);
        } else {
            //Posiciones a las que se puede mover
            onePosition = this.numberToLetter(y) + (x);
            twoPosition = this.numberToLetter(y) + (x - 1);
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

    checkPositionAvailableEat = () => {
        const y = this.letterToNumber(this.position[0]);
        const x = parseInt(this.position[1]) - 1;
        
        if(this.color === 'white'){
            const left = this.numberToLetter(y + 1) + (x + 2);
            const right = this.numberToLetter(y - 1) + (x + 2);
            
            this.pieceAvalibleToEat(left);
            this.pieceAvalibleToEat(right);
            this.showPositionAvailableToEat();
        } else {
            const left = this.numberToLetter(y - 1) + (x);
            const right = this.numberToLetter(y + 1) + (x);
            
            this.pieceAvalibleToEat(left);
            this.pieceAvalibleToEat(right);
            this.showPositionAvailableToEat();
        }
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

    showPositionAvailableToEat = () => {
        this.positionAvailableEat.forEach((posicionAvalible) => {
            const element = document.getElementById(posicionAvalible)!;
            const child = element.querySelector('.position__available--eat');

            if (!child){     
                const div = document.createElement('div');
                div.classList.add('position__available--eat');
                div.addEventListener('click', () => {
                    this.movePieceBoard(this.position, posicionAvalible);  
                });
    
                element.appendChild(div);
            }    
        });
        this.positionAvailableEat = [];
    }
}   

export default pawn;





