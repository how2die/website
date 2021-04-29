import React, { useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { Link, withRouter } from 'react-router-dom';
import headerHomeLogo from 'components/header/img/home.svg';
import headerLoginLogo from 'components/header/img/login.svg';
import headerLogoutLogo from 'components/header/img/logout.svg';
import headerScissorsLogo from 'components/header/img/scissors.svg';
import headerChanLogo from 'components/header/img/chan.svg';
import 'components/header/Header.css';

const Image = ({ src, alt, className, onClick }) => {

    const [loaded, setLoaded] = useState(false);

    return (
        <img
            style={loaded ? {} : { display: 'none' }}
            src={src}
            alt={alt}
            className={className}
            onClick={onClick}
            onLoad={() => setLoaded(true)}
        />
    );
}

const HeaderButton = ({ logo, alt, onClick }) => {
    return <Image src={logo} className="header-logo" alt={alt} onClick={onClick} />;
};

const HeaderHomeButton = () => {
    return <HeaderButton logo={headerHomeLogo} alt="Home" />
};

const HeaderScissorsButton = () => {
    return <HeaderButton logo={headerScissorsLogo} alt="Rock paper scissors" />
};

const HeaderChanButton = () => {
    return <HeaderButton logo={headerChanLogo} alt="Chan" />
};

const HeaderLoginButton = ({ onClick }) => {
    return <HeaderButton logo={headerLoginLogo} alt="Login" onClick={onClick} />;
};

const HeaderLogoutButton = ({ onClick }) => {
    return <HeaderButton logo={headerLogoutLogo} alt="Logout" onClick={onClick} />;
};

const Username = ({ name }) => {
    return <p className="username">{name}</p>;
};

const Header = ({ history }) => {

    const { keycloak, initialized } = useKeycloak();

    return (
        <header className="header-class">
            <div className="align-left">
                <Link to="/"><HeaderHomeButton /></Link>
                <Link to="/steinsakspapir"><HeaderScissorsButton /></Link>
                <Link to="/chan"><HeaderChanButton /></Link>
            </div>

            <div className="align-right">
                {(initialized && keycloak.authenticated &&
                    <Username name={keycloak.tokenParsed.preferred_username} />
                )}

                {(initialized && !keycloak.authenticated &&
                    <HeaderLoginButton onClick={() => keycloak.login()} />
                )}

                {(initialized && keycloak.authenticated &&
                    <HeaderLogoutButton onClick={() => {
                        history.push('/');
                        keycloak.logout();
                    }} />
                )}
            </div>
        </header>
    );
}

export default withRouter(Header);
