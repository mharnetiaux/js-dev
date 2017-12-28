import React from 'react';
import PropTypes from 'prop-types';

let Button=(props)=>{
    "use strict";
    return(
        <button onClick={props.action}>{props.text}</button>
    );
};

Button.propTypes = {
    action:PropTypes.func,
    text:PropTypes.string,
};

export default Button;