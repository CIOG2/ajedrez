import pieceChess from "./pieceChess";

class bishop extends pieceChess{
    
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

        element.innerHTML = '';      
        element.appendChild(image);
    }


    previewMove = () => {
        if (this.getTurnToMove() === this.color) {
            this.removePositionAvailable();
            this.removePositionAvailableToEat();
            this.moveAvailable();
            this.showPositionAvailable(this.generetePiece);
            this.positionAvailable = [];                
        }
    }

    moveAvailable = () => {    
        this.pieceSelected(this.position);
        this.diagonalMove();
        this.showPositionAvailableToEat(this.generetePiece);
    }
}

export default bishop;