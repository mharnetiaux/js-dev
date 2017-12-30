import './client/scss/base.scss';

import React from 'react';
import update from 'immutability-helper';
import Nav from './components/Nav';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            one: {
                text: 'force push',
                class: 'hidden',
                items: {
                    Luke: "Jedi Knight",
                    Leah: "Leader of Rebellion",
                    Han: "Smuggler",
                    Chewy: "Smuggler and Wookie"
                }
            }
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {

        let toggle = (this.state.one.class === "hidden") ? "visible" : "hidden";

        let  new_state = update(this.state, {
            one: {
                class: {$set: toggle}
            }
        });

        this.setState(new_state);
    }

    render() {
        return (
            <Nav data = {this.state} action = {this.toggleNav}/>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));