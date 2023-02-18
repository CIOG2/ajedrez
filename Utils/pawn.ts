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
                this.firstMove = false;
                this.movePieceBoard(this.position, posicionAvalible, this.generetePiece);  
            });

            element.innerHTML = '';
            element.appendChild(div);
        });
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


    showPositionAvailableToEat = () => {
        this.positionAvailableEat.forEach((posicionAvalible) => {
            const element = document.getElementById(posicionAvalible)!;
            const child = element.querySelector('.position__available--eat');

            if (!child){     
                const div = document.createElement('div');
                div.classList.add('position__available--eat');
                div.addEventListener('click', () => {
                    this.firstMove = false;
                    this.movePieceBoard(this.position, posicionAvalible, this.generetePiece);  
                });
    
                element.appendChild(div);
            }    
        });
        this.positionAvailableEat = [];
    }
}   

export default pawn;





