import piecesWhite from "@datos/PiecesWhite";
import piecesBlack from "@datos/PiecesBlack";
import game from "../../utils/game";
import Styles from './styles.module.scss'
import Columns from './Column'

const Board = () =>{
    const letras = ['A','B','C','D','E','F','G','H'];
    const dataPieces = [...piecesWhite, ...piecesBlack];
    const newGame = new game();


    return(
        <main className = {`${Styles['main']}`}>
            {letras.map((item, index) =>
                <Columns
                    key={index}
                    letter={item}
                    index={index}
                />   
            )}
            <div className={`${Styles['main__simbol']} ${Styles['column']}`}>
                <span>8</span> 
                <span>7</span> 
                <span>6</span>  
                <span>5</span>  
                <span>4</span>  
                <span>3</span>  
                <span>2</span>  
                <span>1</span>
            </div>
            
            <div className={`${Styles['main__simbol']} ${Styles['row']}`}>
                <span>A</span> 
                <span>B</span>
                <span>C</span>
                <span>D</span>
                <span>E</span>
                <span>F</span>
                <span>G</span>
                <span>H</span>
            </div>

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

export default Board;