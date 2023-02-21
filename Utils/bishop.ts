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
        this.removePositionAvailable();
        this.removePositionAvailableToEat();
        this.moveAvailable();
        this.showPositionAvailable();
    }

    moveAvailable = () => {    
        this.pieceSelected(this.position);
        this.diagonalMove(this.position, this.color);
        this.showPositionAvailableToEat();
    }
    

    showPositionAvailableToEat = () => {
        this.positionAvailableEat.forEach((posicionAvalible) => {
            const element = document.getElementById(posicionAvalible)!;
            const child = element.querySelector('.position__available--eat');

            if (!child){     
                const div = document.createElement('div');
                div.classList.add('position__available--eat');
                div.addEventListener('click', () => {
                    this.movePieceBoard(this.position, posicionAvalible, this.generetePiece);  
                });
    
                element.appendChild(div);
            }    
        });
        this.positionAvailableEat = [];
    }

    showPositionAvailable = () => {
        this.positionAvailable.forEach((posicionAvalible) => {
            const element = document.getElementById(posicionAvalible)!;
            const div = document.createElement('div');
            div.classList.add('position__available');
            div.addEventListener('click', () => {
                this.movePieceBoard(this.position, posicionAvalible, this.generetePiece);  
            });

            element.innerHTML = '';
            element.appendChild(div);
        });
    }


}

export default bishop;