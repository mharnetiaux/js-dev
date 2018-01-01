import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Button from './Button';

class Nav extends React.Component{
    
    constructor(){
        super(...arguments);
        this.toggleNav= this.toggleNav.bind(this);
    }
    
    toggleNav() {
        this.props.action();
    }
    
    render() {
        return(
            <nav>
                <Button text={this.props.data.one.text} action={this.toggleNav} />
                <List class={this.props.data.one.class} items={this.props.data.one.items} />
            </nav>
        );

    }
}

Nav.propTypes = {
    data:PropTypes.object,
    action:PropTypes.func
};

export default Nav;
