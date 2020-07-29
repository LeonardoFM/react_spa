import React from 'react';

import '../../Menu/Menu.css';

const ButtonLink = (props) => {

    return(
        <a href={props.href} className={props.className}>
            Nova aba testes dos teste
        </a>
    );
}

export default ButtonLink;