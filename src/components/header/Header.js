import React from 'react';
import headerHomeLogo from 'components/header/img/home.svg';
import headerLoginLogo from 'components/header/img/login.svg';
import headerLogoutLogo from 'components/header/img/logout.svg';
import Popup from 'components/header/Login/Popup';
import 'components/header/Header.css';

class Image extends React.Component {
    constructor() {
        super();
        this.state = { loaded: false };
    }

    render() {
        return (
            <img
                style={this.state.loaded ? {} : { display: 'none' }}
                src={this.props.src}
                alt={this.props.alt}
                className={this.props.className}
                onLoad={() => this.setState({ loaded: true })}
            />
        );
    }
}

const HeaderButton = (props) => {
    const orientationClassName = props.orientation === "right" ? "Header-right" : "Header-left";
    return (
        <div className={`${orientationClassName}`} onClick={props.onClick}>
            <Image src={props.logo} className="Header-logo" alt={props.alt} />
        </div>
    );
};

const HeaderHomeButton = () => {
    return <HeaderButton logo={headerHomeLogo} orientation="left" alt="Home" />
};

const HeaderLoginButton = (props) => {
    return <HeaderButton logo={headerLoginLogo} orientation="right" alt="Login" onClick={props.setShowLogin} />;
};

const HeaderLogoutButton = () => {
    return <HeaderButton logo={headerLogoutLogo} orientation="right" alt="Logout" />;
};

class Header extends React.Component {
    constructor() {
        super();
        this.state = { showLogin: false, isLoggedIn: false };
        this.setShowLogin = this.setShowLogin.bind(this);
    }

    setShowLogin() {
        this.setState(state => ({ showLogin: true }));
    }

    render() {
        return (
            <div className="Header">
                <header >
                    <HeaderHomeButton />
                    {this.state.isLoggedIn ? <HeaderLogoutButton /> : <HeaderLoginButton setShowLogin={this.setShowLogin} />}
                </header>
                {this.state.showLogin ? <Popup /> : null}
            </div>
        );
    }
}

export default Header;
