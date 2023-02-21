class pieceChessDom {

    removePositionAvailable = () => {
        const avalibleMoves = document.querySelectorAll('.position__available');
        
        if (avalibleMoves) 
            avalibleMoves.forEach((element) => element.remove());

        const pieceSelet = document.querySelector('.piece__selected--to-move');
        if (pieceSelet) pieceSelet.remove();
    }

    pieceSelected = (position: string) => {
        const piece = document.getElementById(position);
        const pieceSelected = document.createElement('div');
        pieceSelected.classList.add('piece__selected--to-move');
        piece?.appendChild(pieceSelected);
    }

    removePositionAvailableToEat = () => {
        const avalibleMoves = document.querySelectorAll('.position__available--eat');
        
        if (avalibleMoves) 
            avalibleMoves.forEach((element) => element.remove());
    }

    movedPiecePreviously = (position: string, newPosition: string) => {
        const pos = document.getElementById(position);
        const newPos = document.getElementById(newPosition);

        const pieceMoved = document.createElement('div');
        pieceMoved.classList.add('piece__move--show');
        const copyPiece = pieceMoved.cloneNode(true);

        pos?.appendChild(pieceMoved);
        newPos?.appendChild(copyPiece);
    }

    removePieceMovedPreviously = () => {
        const pieceMoved = document.querySelectorAll('.piece__move--show');
        pieceMoved.forEach((element) => element.remove());
    }
}

export default pieceChessDom;