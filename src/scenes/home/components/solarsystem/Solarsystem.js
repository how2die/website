import React, { useState } from 'react';
import pi from 'scenes/home/components/solarsystem/img/pi.svg';
import k8s from 'scenes/home/components/solarsystem/img/k8s.svg';
import react from 'scenes/home/components/solarsystem/img/react.svg';
import 'scenes/home/components/solarsystem/Solarsystem.css';

const Image = ({ src, alt }) => {

    const [loaded, setLoaded] = useState(false);

    return (
        <img
            style={loaded ? {} : { display: 'none' }}
            src={src}
            alt={alt}
            className={`centered`}
            onLoad={() => setLoaded(true)}
        />
    );
}

const Planet = (props) => {
    return (
        <a href={props.link}>
            <Image src={props.img} alt="planet" />
        </a>
    );
};

const replaceRule = (ruleName, newRule) => {
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
        for (let j = 0; j < styleSheets[i].cssRules.length; j++) {
            let rule = styleSheets[i].cssRules[j];
            if (rule.name === ruleName && rule.type === CSSRule.KEYFRAMES_RULE) {
                styleSheets[i].deleteRule(j);
                styleSheets[i].insertRule(newRule, j);
            }
        }
    }
}

const consistentOrbit = (orbitName, milliseconds) => {
    const startDegrees = ((Date.now() % milliseconds) / milliseconds) * 360;
    const endDegrees = 360 + startDegrees;

    const newRule = `@keyframes ${orbitName} { 
        from { transform: rotate(${startDegrees}deg) } 
        to { transform: rotate(${endDegrees}deg) } 
    }`;

    replaceRule(orbitName, newRule);
}

const createConsistentOrbits = () => {
    consistentOrbit("orbitA", 7000);
    consistentOrbit("orbitB", 11000);
}

createConsistentOrbits();

const Solarsystem = () => {
    return (
        <div className="Solarsystem-wrapper">
            <ul className="Solarsystem">
                <li className="sun"><Planet img={pi} link="https://www.raspberrypi.org/" /></li>
                <li className="planetA"><Planet img={k8s} link="https://kubernetes.io/" /></li>
                <li className="planetB"><Planet img={react} link="https://reactjs.org/" /></li>
            </ul>
        </div>
    );
};

export default Solarsystem;
