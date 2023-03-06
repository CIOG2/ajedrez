import Styles from './styles.module.scss'

const SelectGame = () => {

    const links = [
        {
            name: 'JUEGO EN LOCAL',
            href: './localgame'
        },
        {
            name: 'JUEGO EN LÍNEA',
            href: './onlinegame'
        },
        {
            name: 'VER PARTIDA',
            href: './watchgame'
        }
    ];


    return(
        <main className = {`${Styles['main']}`}>
            <h1
                className = {`${Styles['main__title']}`}
            >
                Selecciona un modo de juego
            </h1>

            {links.map((link, index) => 
                <a
                    key = {index}
                    href = {link.href}
                    className = {`${Styles['main__button']}`}
                >
                    {link.name}
                </a>
            )}
        
        </main>
    )
}

export default SelectGame;