import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

export const Restricted = ({role, component}) => {

    const { keycloak, initialized } = useKeycloak();

    if (!initialized) {
        return <p>Checking credentials...</p>;
    } else if (!keycloak.authenticated || !keycloak.realmAccess.roles.includes(role)) {
        return <p>Not authorized</p>;
    } else {
        return {component}
    }
}
