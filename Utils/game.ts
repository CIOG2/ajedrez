import { pieceChess } from '@interfaces/index';

class game {
    virtualBoard:any[] = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    startGame(data:pieceChess[]) {
        data.map((piece) => {
            piece.initialPosition.map((position) => {
                const element = document.querySelector(`#${position}`);
                if (element) {
                    element.innerHTML = `<img src="${piece.path}" alt="${piece.name} ${piece.color}" />`;
                    element.addEventListener('click', () => {
                        console.log(position);
                    });
                }
       
                const y = this.letterToNumber(position[0]);
                const x = parseInt(position[1]) - 1;
                
                this.virtualBoard[y][x] = `${piece.name} ${piece.color}`;
            });
        });
        
        const button = document.querySelector('#buttonStart');
        button?.remove();    
        console.table(this.virtualBoard);
    }
    
    letterToNumber(letter:string) {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        return letters.indexOf(letter);
    }
}

export default game;