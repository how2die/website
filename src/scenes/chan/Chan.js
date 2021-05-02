import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Chan = () => {

    const { keycloak, initialized } = useKeycloak();

    if (!initialized) {
        return <p>Checking credentials...</p>;
    } else if (!keycloak.authenticated || !keycloak.realmAccess.roles.includes("CHAN")) {
        return <p>Not authorized</p>;
    } else {
        return <h1>{"// TODO"}</h1>
    }
}

export default Chan;
