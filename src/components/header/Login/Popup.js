import React from 'react';
import 'components/header/Login/Login.css';

class Popup extends React.Component {
    constructor() {
        super();
        this.state = { login: true };
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>// TODO</button>
                </div>
            </div>
        );
    }
}

export default Popup;
