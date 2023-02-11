import { pieceChess } from '@interfaces/index';

const piecesWhite:pieceChess[] = [
    {
        name: 'pawn',
        path: `https://www.chess.com/chess-themes/pieces/neo/150/wp.png`,
        color: 'white',
        initialPosition: ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2'],
    },
    {
        name: 'horse',
        path: `https://www.chess.com/chess-themes/pieces/neo/150/wn.png`,
        color: 'white',
        initialPosition: ['B1', 'G1'],
    },
    {
        name: 'bishop',
        path: `https://www.chess.com/chess-themes/pieces/neo/150/wb.png`,
        color: 'white',
        initialPosition: ['C1', 'F1'],
    },
    {
        name: 'tower',
        path: `https://www.chess.com/chess-themes/pieces/neo/150/wr.png`,
        color: 'white',
        initialPosition: ['A1', 'H1'],
    },
    {
        name: 'queen',
        path: `https://www.chess.com/chess-themes/pieces/neo/150/wq.png`,
        color: 'white',
        initialPosition: ['D1'],
    },
    {
        name: 'king',
        path: `https://www.chess.com/chess-themes/pieces/neo/150/wk.png`,
        color: 'white',
        initialPosition: ['E1'],
    },
];

export default piecesWhite;