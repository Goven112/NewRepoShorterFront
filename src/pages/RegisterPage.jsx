import React, {useCallback, useState} from 'react';
import {useRequest} from "../common/http/useRequest";
import {Link} from "react-router-dom";
import {ABOUT, LOGIN} from "../common/navigation/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthDTO from '../Models/AuthDTO';
import { LoginUser,RegisterUser } from '../api/ordersApi.js';
const RegisterPage = ({ setToken }) => {

    const [form, setForm] = useState({
        userName: '',
        email: '',
        password: '',
    });

    const { loading, request } = useRequest();

    const formChangeHandler = useCallback((event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }, [form]);

    // const registerHandler = useCallback(async () => {

 
    //     const data = await request('/register', 'POST', { ...form });
    //     const {token} = data;
    //     if (token) {
    //         setToken(token);
    //         localStorage.setItem('token', token);
    //     }
    // }, []);

    const registerHandler1 =  async ( event ) => {
        

        const registerUser = new AuthDTO(form.userName,form.email, form.password);
 
        console.log(registerUser);
        const response = await RegisterUser(registerUser);
        const responseLogin = await LoginUser(registerUser);
        const token = responseLogin.data.tokens.accessToken;
        const userId = responseLogin.data.user.id;
        //const data = await request('/register', 'POST', { ...form });
         
        if (token) {
            setToken(token);
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
        }
    }

    

    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4>Register</h4>
              </div>
              <div className="card-body">
                <form>
                    
                <div className="form-group">
                    <label htmlFor="userName">Your name</label>
                    <input  
                    className="form-control" 
                    value={form.userName}
                    placeholder={'userName'}
                    type={'userName'}
                    name={'userName'}
                    onChange={formChangeHandler}
                    disabled={loading}
                    
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input  
                    className="form-control" 
                    value={form.email}
                    placeholder={'Email'}
                    type={'email'}
                    name={'email'}
                    onChange={formChangeHandler}
                    disabled={loading}
                    
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input    
                    className="form-control" 
                    value={form.password}
                    placeholder={'Password'}
                    type={'password'}
                    name={'password'}
                    onChange={formChangeHandler}
                    disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="remember-me"/>
                      <label className="custom-control-label" htmlFor="remember-me">Remember me</label>
                    </div>
                  </div>
                  <button 
                  type="button" 
                  className="btn btn-primary btn-block"
                  onClick={registerHandler1} disabled={loading}
                  >
                    Register
                  </button>
                   
                  <Link to={LOGIN}>Login</Link>
                    <br/>
                    <Link to={ABOUT}>Read about my algorithm</Link>
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RegisterPage;
