import './styles/less/styles.less'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {FeedEndPoint} from '../api/endpoints.js';
import Feed from './components/Feed.js'
import Loading from './components/Loading.js';
import SendMessage from './components/SendMessage.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            loading: false,
            errored: false
        };
        this.sendMessage = this.sendMessage.bind(this);

    }

    getFeed(url) {
        this.setState({loading: true});
        const messages = this.state.messages;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                this.setState({ loading: false });
                return response;
            })
            .then((response) => response.json())
            .then((content) => {
                Object.keys(content.feed).map(item => {
                    messages.push(content.feed[item]);
                });
                this.setState({messages})
            })
            .catch(() => this.setState({ errored: true }));
        this.setState({feedCount: messages.length});
    }

    sendMessage(message){
        const messages = this.state.messages;
        messages.push(
            {
                "user": "User " + Math.floor(Math.random() * 20),
                "value": message,
                "likes": Math.floor(Math.random() * 100)
            }
        );
        this.setState({messages});
    }

    componentDidMount() {
        this.getFeed(FeedEndPoint);
    }

    render() {
        const messageCount = this.state.messages.length;
        return (
            <main>
                <header><h2 className="title">Messages: ({messageCount}) </h2></header>
                <section>
                    {this.state.messages.length ? <Feed messages={this.state.messages} /> : <Loading/>}
                </section>
                <footer><SendMessage sendMessage={this.sendMessage}/></footer>
            </main>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
