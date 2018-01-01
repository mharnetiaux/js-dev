import './styles/less/styles.less'
import './styles/scss/styles.scss'

import React from 'react';
import update from 'immutability-helper';
import Nav from './components/Nav';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            one: {
                text: 'Force Push',
                class: 'hidden',
                items: {
                    Luke: "Jedi Knight",
                    Leah: "Leader of Rebellion",
                    Han: "Human Smuggler",
                    Chewy: "Wookie Smuggler"
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