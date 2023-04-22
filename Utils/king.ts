import pieceChess from "./pieceChess";

class king extends pieceChess{
    
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
        this.movePiece();
        this.showPositionAvailableToEat(this.generetePiece);
    }

    movePiece = () => {
        const y = this.letterToNumber(this.position[0]);
        const x = parseInt(this.position[1]) - 1;
        const movesAvalibles:string[] = [];
        const movesAvaliblesEat:string[] = [];

        const moves = [
            {y: 1, x: 0},  //up
            {y: -1, x: 0}, //down
            {y: 0, x: -1}, //left
            {y: 0, x: 1},  //right
            {y: 1, x: 1},  //upRight
            {y: 1, x: -1}, //upLeft
            {y: -1, x: 1}, //downRight
            {y: -1, x: -1} //downLeft 
        ]


        moves.forEach(move => {
            const newPosition = this.numberToLetter(y + move.y) + (x + move.x + 1);

            if (!this.pieceInThisPosition(newPosition)){
                if (this.OffTheBoard(newPosition)) 
                    movesAvalibles.push(newPosition);
            }        
            else
                movesAvaliblesEat.push(newPosition);
        });
        

        movesAvalibles.forEach((position) => {
            const validMove = this.evaluatePositinAvailableToMoveNotCheck(position);
            if (validMove)
                this.positionAvailable.push(position);
        })

        movesAvaliblesEat.forEach((position) => {
            const validMove = this.evaluatePositinAvailableToMoveNotCheck(position);
            if (validMove)
                this.pieceAvalibleToEat(position)
        })
    }

    kingOnCheck = (y: number, x: number, color: string, kingSelect: boolean) => {
        const checksAvailable:any = [];

        const moves = [
            {y: 1, x: 0, type: 'horizontal'},  //up
            {y: -1, x: 0, type: 'horizontal'}, //down
            {y: 0, x: -1, type: 'horizontal'}, //left
            {y: 0, x: 1, type: 'horizontal'},  //right
            {y: 1, x: 1, type: 'diagonal'},  //upRight
            {y: 1, x: -1, type: 'diagonal'}, //upLeft
            {y: -1, x: 1, type: 'diagonal'}, //downRight
            {y: -1, x: -1, type: 'diagonal'} //downLeft 
        ]

        moves.forEach((move) => {
            const checks = this.calculateMoveCheck(y, x, move.y, move.x, move.type, color);
            if (checks.length > 0)
                checksAvailable.push(...checks);
        })

        if (!kingSelect)
            this.applyCheck(checksAvailable);
        else
            return checksAvailable;
    }

    
    calculateMoveCheck = (y:number, x:number, moveY:number, moveX:number, type: string, color: string) => {
        const positionKing = this.numberToLetter(y) + (x + 1);
        let canYouMove = true;
        let counter = 0;
        const dataCheck = [];
        while(canYouMove) {
            y += moveY;
            x += moveX;
            
            if (y < 0 || y > 7 || x < 0 || x > 7)
            canYouMove = false;
            else{        
                const position = `${this.numberToLetter(y)}${x + 1}`;
                if (this.pieceInThisPosition(position)) {
                    canYouMove = false;
                    const pieceFocus = this.copyPieceVirtualBoard(position);
                    
                    if (pieceFocus.color !== color) {
                        const checkHorizontal = (type === 'horizontal' && (pieceFocus.name === 'tower' || pieceFocus.name === 'queen'));
                        const checkDiagonal = (type === 'diagonal' && (pieceFocus.name === 'bishop' || pieceFocus.name === 'queen'));
                        const checkPawn = (type === 'diagonal' && pieceFocus.name === 'pawn' && counter < 1 );
                        
                        if (checkHorizontal || checkDiagonal || checkPawn){
                            dataCheck.push({
                                pieceFocus, 
                                type,
                                color,
                                positionKing,
                            });
                        }
                    }
                }
                counter++;
            }
        }
        
        return dataCheck;
    }

    applyCheck = (data: any) => {
        if(data.length >= 1){
            const positionKing = data[0].positionKing;
            const color = data[0].color;
            this.kingInCheck(positionKing);
            this.setKingState(color, true);
        }else{
            this.removeKingInCheck();
            //Como no hay jaque, el estado del rey cambia a false
            (this.color === 'white')
                ? this.setKingState('black', false)
                : this.setKingState('white', false);
        }

        console.log(data);
    }

    evaluatePositinAvailableToMoveNotCheck = (position: string) => {
        //Posiciones del rey en el tablero virtual/array
        const y = this.letterToNumber(position[0]);
        const x = parseInt(position[1]) - 1;

        const moves = this.kingOnCheck(y, x, this.color, true);        
    
        if (moves.length === 0)
            return moves;
    }


}

export default king;