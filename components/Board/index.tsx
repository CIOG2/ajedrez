import Styles from './styles.module.scss'
import Colums from './Column'

const board = () =>{
    const letras = ['A','B','C','D','E','F','G','H'];

    return(
        <main className = {`${Styles['main']}`}>
            {letras.map((item, index) =>
                <Colums
                    key={index}
                    letter={item}
                    index={index}
                />   
            )}
        </main>
    )
}

export default board;