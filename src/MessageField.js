import React from 'react';

const apiRoot = "/api/messages";
const messageId = "0";
const getIntervalMs = 1000;

class MessageField extends React.Component {
    constructor() {
        super();
        this.state = { loaded: false, value: "", lastWrite: null };
    }

    componentDidMount = () => {
        this.getMessage();
        this.interval = setInterval(() => this.getMessage(), getIntervalMs);
    }

    sendMessage = value => {
        this.setState({value: value });
        this.setState({value: value, lastWrite: new Date()}, () => {
            let request = new XMLHttpRequest();
            const message = JSON.stringify({ 
                "content": this.state.value, 
                "sent": this.state.lastWrite });
        
            request.open('PUT', `${apiRoot}/${messageId}`, true);
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(message);
        });
    }

    getMessage = () => {
        if (document.hidden) {
            return;
        }
    
        let request = new XMLHttpRequest();
        request.open('GET', `${apiRoot}/${messageId}`, true);
        request.onload = () => {
            if (request.status === 200) { 
                const message = JSON.parse(request.response); 
                const sent = new Date(message.sent);
                if (!this.state.lastWrite || sent > this.state.lastWrite) {
                    this.setState({value: message.content, loaded: true});
                }
            }
        }
        request.send();
    }

    render() {
        return (
            <input
                style={this.state.loaded ? {} : { display: 'none' }}
                type="text"
                onChange={e => this.sendMessage(e.target.value)}
                value={this.state.value}/>
        );
    }
}

export default MessageField;
