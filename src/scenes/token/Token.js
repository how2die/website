import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Token = () => {

    const { keycloak, initialized } = useKeycloak();

    return <div>
        {(initialized && keycloak.authenticated &&
            <p>{keycloak.token}</p>
        )}
    </div>
}

export default Token;
