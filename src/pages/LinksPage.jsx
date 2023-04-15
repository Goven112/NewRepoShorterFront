import React, {useCallback} from 'react';

const MainPage = ({setToken}) => {

    const logout = useCallback(() => {
        setToken('');
        localStorage.removeItem('token');
    }, [])

    return (
        <div>
            Main
            <button onClick={logout}>logout</button>
        </div>
    );
};

export default MainPage;
