import React, {useCallback, useEffect, useState} from 'react';
import {useRequest} from "../common/http/useRequest";
import {Link, Navigate, useParams} from "react-router-dom";
import {LINKS} from "../common/navigation/routes";
import {  getLinkById,getUserById,deleteUrlById } from '../api/ordersApi.js';
import { useNavigate } from "react-router-dom";

const LinkPage = (props) => {
    const navigate = useNavigate();
    const [link, setLink] = useState({});
    const { id } = useParams();

    const { request, loading } = useRequest();

    const loadLink = useCallback(async () => {
 
        const data = await getLinkById(id);
        
        const user = await getUserById(data.data.userId);
        console.log(user);

        setLink({createdAt: data.data.createdAt, actualLink: data.data.originalUrl, id: data.data.id,userName: user.data.userName});

    }, []);


    const deleteUrl =  async ( event ) => {
       // const data = await deleteUrlById(id);
        navigate("/links");
    }

    useEffect(() => {
        
        loadLink();
    }, [loadLink]);


    return (
        <div>
            {loading ?
                <div>Loading...</div>
                : link ?
                <div>
                    <h1>Detailed info about link</h1>
                    <div>ID: {link.id}</div>
                    <div>createdAt: {link.createdAt}</div>
                    <div>Actual link: {link.actualLink}</div>  
                    <div>Name Created: {link.userName}</div>
                    <br>
                    </br>
                    <button className="btn btn-primary" type="button" onClick={deleteUrl} disabled={loading}>Short the link</button>
                </div>
                    : <div>No link with such id</div>
            }
            <Link to={LINKS}>Back</Link>
        </div>
    );
};

export default LinkPage;
