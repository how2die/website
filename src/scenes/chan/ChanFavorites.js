import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

export const Chanfavorites = () => {

    const { keycloak, initialized } = useKeycloak();

    if (!initialized) {
        return <p>Checking credentials...</p>;
    } else if (!keycloak.authenticated || !keycloak.realmAccess.roles.includes("CHAN")) {
        return <p>Not authorized</p>;
    } else {
        return <h1>{"// TODO"}</h1>
    }
}
