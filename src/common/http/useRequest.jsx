import {useCallback, useState} from "react";

export const useRequest = () => {
    const [loading, setLoading] = useState(false);
    const request = useCallback(async (url = '', method = 'GET', body = {}, headers = {}) => {
        setLoading(true);
        // try {
        //     const response = await fetch(url, { method, body: JSON.stringify(body), headers });
        //     if (!response.ok) {
        //         throw new Error('error');
        //     }
        //     return await response.json();
        // } catch (e) {}
        // finally {
        //     setLoading(false)
        // }

        return new Promise((resolve) => {
            setTimeout(() => {
                setLoading(false);
                resolve({token: '321321321'});
            }, 2000)
        })


    }, []);
    return { loading, request };
}
