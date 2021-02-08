
function Logo(){
    return(
        <div className='logo'>
            <picture>
                <source media="(max-width:768px)"srcSet="./img/logoP.png" alt="imagem do logo"/>
                <source media="(min-width:769px)"srcSet="./img/logoG.png" alt="imagem do logo"/>
                <img src="./img/logoP.png" alt="imagem do logo"/>
            </picture>

        </div>
    )
}

export default Logo