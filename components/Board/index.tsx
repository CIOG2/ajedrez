import { useEffect } from 'react';
import piecesWhite from "@datos/PiecesWhite";
import piecesBlack from "@datos/PiecesBlack";
import game from 'utils/game';
import Styles from './styles.module.scss'
import Colums from './Column'

const board = () =>{
    const letras = ['A','B','C','D','E','F','G','H'];
    const dataPieces = [...piecesWhite, ...piecesBlack];
    const newGame = new game();


    return(
        <main className = {`${Styles['main']}`}>
            {letras.map((item, index) =>
                <Colums
                    key={index}
                    letter={item}
                    index={index}
                />   
            )}
            <button 
                className = {`${Styles['button__start']}`}
                onClick = {() => newGame.startGame(dataPieces)}
                id = 'buttonStart'
            >
                Iniciar
            </button>
        </main>
    )
}

export default board;