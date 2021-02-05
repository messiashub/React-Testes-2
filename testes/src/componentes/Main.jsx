import React from 'react'

import Slide from './main/Slide';
import Information from './main/Information';
import Contact from './main/Contact';
import Maps from './main/Maps';


function Main(){
    return(
        <div className='main'>
            <Slide/>
            <Information/>
            <Contact/>
            <Maps/>

        </div>
    )
}

export default Main;