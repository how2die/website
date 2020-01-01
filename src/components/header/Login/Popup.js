import React from 'react';
import 'components/header/Login/Login.css';
import LoginForm from 'components/header/Login/LoginForm';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: true };
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.escPressed = this.escPressed.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.escPressed, false);
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.escPressed, false);
        document.removeEventListener('mousedown', this.handleClickOutside, false);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    escPressed(event) {
        if (event.keyCode === 27) {
            this.props.closePopup();
        }
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.closePopup();
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("HEY");
    }

    doLogin() {
        //this.props.closePopup();
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner' ref={this.setWrapperRef}>
                    <LoginForm closePopup={this.props.closePopup}/>
                    <button onClick={this.props.closePopup}>Close</button>
                </div>
            </div>
        );
    }
}

export default Popup;
