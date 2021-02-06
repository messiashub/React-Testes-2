import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Nav() {
    return (
        <div className="nav">
            <AnchorLink href='#home' offset= '100'>Home</AnchorLink>
            <AnchorLink href='#foto'>Fotos</AnchorLink>
            <AnchorLink href='#information  '>Informações</AnchorLink>
            <AnchorLink href='#contact'>Contato</AnchorLink>
        </div>
    )
}
export default Nav