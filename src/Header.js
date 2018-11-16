import React from 'react';
import headerHomeLogo from './img/header/home.svg';
import headerLoginLogo from './img/header/login.svg';
import headerLogoutLogo from './img/header/logout.svg';
import './Header.css';

class Image extends React.Component {
    constructor() {
        super();
        this.state = { loaded: false };
    }

    render() {
        let flickerClass = this.props.flicker ? 'animate-flicker' : '';
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
        <div className={`${orientationClassName}`}>
            <Image src={props.logo} className="Header-logo" alt={props.alt} />
        </div>
    );
};

const HeaderHomeButton = () => {
    return <HeaderButton logo={headerHomeLogo} orientation="left" alt="Home" />
};

const HeaderLoginButton = () => {
    return <HeaderButton logo={headerLoginLogo} orientation="right" alt="Login" />;
};

const HeaderLogoutButton = () => {
    return <HeaderButton logo={headerLogoutLogo} orientation="right" alt="Logout" />;
};

const Header = (props) => {
    return (
        <div className="Header">
            <header >
                <HeaderHomeButton />
                {props.isLoggedIn ? <HeaderLogoutButton /> : <HeaderLoginButton />}
            </header>
        </div>
    );
}

export default Header;
