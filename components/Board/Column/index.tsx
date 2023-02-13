import { FC } from 'react';
import Styles from './styles.module.scss'

interface Props{
    letter: string;
    index: number;
}

const Line:FC<Props> = ({letter, index}) =>{

    const nameClass = (index % 2 === 0) ? 'par' : 'inpar'

    return(
        <section className = {`${Styles['section']} ${Styles[`${nameClass}`]}`}>
            <div id={letter + 8} className = {`${Styles['cube']}`}> {letter + 8} </div>
            <div id={letter + 7} className = {`${Styles['cube']}`}> {letter + 7} </div>
            <div id={letter + 6} className = {`${Styles['cube']}`}> {letter + 6} </div>
            <div id={letter + 5} className = {`${Styles['cube']}`}> {letter + 5} </div>
            <div id={letter + 4} className = {`${Styles['cube']}`}> {letter + 4} </div>
            <div id={letter + 3} className = {`${Styles['cube']}`}> {letter + 3} </div>
            <div id={letter + 2} className = {`${Styles['cube']}`}> {letter + 2} </div>
            <div id={letter + 1} className = {`${Styles['cube']}`}> {letter + 1} </div>
        </section>
    )
}

export default Line;