import pieceChess from "./pieceChess";

class horse extends pieceChess{
    
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

    moveAvailable = () => {    
        this.pieceSelected(this.position);

        this.positionAvailable = this.movePiece(this.position, this.color);
        this.showPositionAvailableToEat();
    }


    movePiece = (position: string, color: string) => {
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;
        const pos:string[] = [];
        const moves = [
            {x: -2, y: -1},
            {x: -2, y: 1},
            {x: -1, y: -2},
            {x: -1, y: 2},
            {x: 1, y: -2},
            {x: 1, y: 2},
            {x: 2, y: -1},
            {x: 2, y: 1}
        ];

        moves.forEach((move) => {
            if(y + move.y >= 0 && y + move.y <= 7 && x + move.x >= 0 && x + move.x <= 7){
                const position = this.numberToLetter(y + move.y) + (x + move.x + 1);
                const piece = this.virtualBoard[y + move.y][x + move.x];
                
                if(piece.color !== color){
                    (this.pieceInThisPosition(position))
                        ?this.pieceAvalibleToEat(position)
                        :pos.push(position);
                }
            }
        });
        return pos;    
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

}

export default horse;