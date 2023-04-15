import React, {useEffect, useState} from 'react';
import Router from "./common/navigation/Router";

const App = () => {
    const [token, setToken] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const lsToken = localStorage.getItem('token');
        if (lsToken) {
            setToken(lsToken);
        }
    }, [])

    return (
        <div>
            { isMounted && <Router token={token} setToken={setToken}/>}
        </div>
    );
};

export default App;
