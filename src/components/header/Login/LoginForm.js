import React from 'react';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };

        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.performLogin = this.performLogin.bind(this);
    }

    handleUsernameInput(event) {
        this.setState({ username: event.target.value });
    }

    handlePasswordInput(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.performLogin();
    }

    performLogin() {
        const loginUrl = 'https://www.how2die.com/api/tokens';
        const credentials = { username: this.state.username, password: this.state.password };
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(response => {
                if (response.status === 201) {
                    response.json().then(json => alert("token: " + json.token))
                    this.props.closePopup();
                } else {
                    alert("wrong username or password");
                }
            })
            .catch(err => alert("ERROR: " + err));
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameInput} /><br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordInput} /><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}
