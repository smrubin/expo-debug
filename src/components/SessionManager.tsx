import React, { useEffect, useState } from 'react';

const SessionManager = ({ children }) => {
    const [isClearingSession, setIsClearingSession] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        void (async () => {
            setIsClearingSession(false);
        })();

        return () => {
            clearInterval(interval);
        };
    }, []);

    return isClearingSession ? null : <>{children}</>;
};

export default SessionManager;
