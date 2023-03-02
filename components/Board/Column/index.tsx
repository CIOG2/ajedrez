import { FC } from 'react';
import Styles from './styles.module.scss'

interface Props{
    letter: string;
    index: number;
}

const Columns:FC<Props> = ({letter, index}) =>{

    const nameClass = (index % 2 === 0) ? 'par' : 'inpar'

    return(
        <section className = {`${Styles['section']} ${Styles[`${nameClass}`]}`}>
            <div id={letter + 8} className = {`${Styles['cube']}`}>  </div>
            <div id={letter + 7} className = {`${Styles['cube']}`}>  </div>
            <div id={letter + 6} className = {`${Styles['cube']}`}>  </div>
            <div id={letter + 5} className = {`${Styles['cube']}`}>  </div>
            <div id={letter + 4} className = {`${Styles['cube']}`}>  </div>
            <div id={letter + 3} className = {`${Styles['cube']}`}>  </div>
            <div id={letter + 2} className = {`${Styles['cube']}`}>  </div>
            <div id={letter + 1} className = {`${Styles['cube']}`}>  </div>
        </section>
    )
}

export default Columns;