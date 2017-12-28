import React from 'react';
import PropTypes from 'prop-types';

let List = (props) => {
    "use strict";
    let list_items = Object.keys(props.items).map((item,id)=>{
        return(
            <li key={id}>{props.items[item]}</li>
        );
    });
    
    return(
        
        <ul className={props.class}>
            {list_items}
        </ul>
       
    );
};

List.propTypes = {
    class:PropTypes.string,
    items:PropTypes.object
};

export default List;