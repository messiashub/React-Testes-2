import React from 'react';


function Map(props) {
    const nomes = ['James', 'Paul', 'John', 'George', 'Ringo'];
    return (
        <div className='container'>          
            <div className="map" style={{borderColor:props.color}}>
    
                <h1>Map|</h1>
                {nomes.map((nome, index) =>
                    (<li key={index}>{nome.toUpperCase()}</li>))}
            </div>
        </div>


    );
}


export default Map