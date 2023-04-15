import React, {useCallback, useEffect, useState} from 'react';
import {useRequest} from "../common/http/useRequest";
import LinksTable from "../components/LinksTable";
import {Link} from "react-router-dom";
import {ABOUT} from "../common/navigation/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  CreateLink,getAllLinks} from '../api/ordersApi.js';
import CreateShortUrlDTO from '../Models/CreateShortUrlDTO';

const LinksPage = ({setToken,token}) => {

    const [links, setLinks] = useState([]);

    const [newLink, setNewLink] = useState('');

    const { request, loading } = useRequest();

    const formChangeHandler = useCallback((event) => {
        console.log(event.target.value);

        setNewLink(event.target.value);

        console.log(newLink);
      }, []);

    const loadLinks = useCallback(async () => {
        const data = await request('/register', 'GET');
       
        var urls =  await getAllLinks();
    
 
         const formattedArray = urls.data.map(url => {
            return {
             id: url.id,
              displayName: url.shortUrl,
              actualLink: url.originalUrl 
              
            };
           
          }
          
          )
          setLinks(formattedArray);
          

        
    }, []);

    useEffect(  () => {
        // Тут запит шоб отримати таблицю зі всіма лінками
        //var urls =  await getAllLinks();

        loadLinks();
    }, [loadLinks]);

    const creatNewLink = useCallback(async () => {
        //const data = await request('/register', 'POST', { newLink },{"Authentication":`Bearer ${token}`});
        
        const userId = localStorage.getItem('userId');

        console.log(newLink);

        const originalLink = new CreateShortUrlDTO(newLink, userId);
        
      
        const response = await CreateLink(originalLink);
        

        // Тут пост запит шоб відправити лінку для того шоб її зашортити
        // Це має бути POST, в респонсі ти повинен повернути цілий об'єкт
        await loadLinks();
    }, [newLink]);

    const logout = useCallback(() => {
        setToken('');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }, []);

    return (
        <div>
            
           

       
         



            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" >My Website</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="">All links  </a>
      </li>
      <li className="nav-item active">
      <Link to={ABOUT}>Read about my algorithm</Link>
      </li>
      <li className="nav-item">
           <button className="btn btn-primary" onClick={logout}>logout</button> 
      </li>
    </ul>
  </div>
</nav>
<div className="container">
  <div className="row">
  <LinksTable links={links} loading={loading} />

    <div className="col-md-6 mx-auto mt-5">
      <h2 className="text-center">Shorten your link</h2>
      <div className="input-group mb-3">
        <input
        className="form-control" 
        aria-label="Shortened link" 
        value={newLink}
        placeholder={'Link'}
        type={'text'}
        name={'newLink'}
        onChange={formChangeHandler}
        disabled={loading}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={creatNewLink} disabled={loading}>Short the link</button>
        </div>
      </div>
    </div>
  </div>
</div>



            

          


       
        </div>
    );
};

export default LinksPage;
