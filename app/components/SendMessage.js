import React, {Component } from 'react';

class SendMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: ""
        };
    }

    onChange(e) {
        this.setState({input: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({input: ""});
        this.props.sendMessage(this.state.input);
    }

    render() {
        return(
            <form onSubmit={e => this.onSubmit(e)}>
                <input
                    onChange={e => this.onChange(e)}
                    value={this.state.input}
                    type="text"
                    placeholder="Enter message"
                />
                <button>Send</button>
            </form>
        );
    }
}

export default SendMessage;

