import { pieceChess } from '@interfaces/index';

const piecesBlack:pieceChess[] = [
    {
        name: 'pawn',
        path: `https://www.chess.com/chess-themes/pieces/neo/150/bp.png`,
        color: 'black',
        initialPosition: ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7'],
    },
    {
        name: 'horse',
        path: `https://www.chess.com/chess-themes/pieces/neo/150/bn.png`,
        color: 'black',
        initialPosition: ['B8', 'G8'],
    },
    {
        name: 'bishop',
        path: `https://www.chess.com/chess-themes/pieces/neo/150/bb.png`,
        color: 'black',
        initialPosition: ['C8', 'F8'],
    },
    {
        name: 'tower',
        path: `https://www.chess.com/chess-themes/pieces/neo/150/br.png`,
        color: 'black',
        initialPosition: ['A8', 'H8'],
    },
    {
        name: 'queen',
        path: `https://www.chess.com/chess-themes/pieces/neo/150/bq.png`,
        color: 'black',
        initialPosition: ['D8'],
    },
    {
        name: 'king',
        path: `https://www.chess.com/chess-themes/pieces/neo/150/bk.png`,
        color: 'black',
        initialPosition: ['E8'],
    },
];

export default piecesBlack;