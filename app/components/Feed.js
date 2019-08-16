import React, {Component } from 'react';
import Message from '../components/Message.js';

class Feed extends Component {
    constructor(){
        super();
        this.state = {
            like: ""
        }
    }

    render() {
        const messages = this.props.messages;
        return(
            <Message messages={messages}/>
        );
    }
}

export default Feed;

