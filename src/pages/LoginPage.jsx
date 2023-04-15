import React, {useCallback, useState} from 'react';
import {useRequest} from "../common/http/useRequest";
import {Link} from "react-router-dom";
import {ABOUT, REGISTER} from "../common/navigation/routes";
import CreateUserDTO from '../Models/AuthDTO';
import LoginDTO from '../Models/LoginDTO';
import { LoginUser,RegisterUser } from '../api/ordersApi.js';
const LoginPage = ({ setToken }) => {

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const { loading, request } = useRequest();

    const formChangeHandler = useCallback((event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }, [form]);

    const loginHandler = useCallback(async () => {
        // Тут запит для логіну
        const data = await request('/url', 'POST', { ...form });
        const {token} = data;
        if (token) {
            setToken(token);
            localStorage.setItem('token', token);
        }
    }, []);

    const loginHandler1 =  async ( event ) => {

        
        const registerUser = new LoginDTO(form.email, form.password);
        console.log(registerUser);
        const response = await LoginUser(registerUser);
       
       // const data = await request('/url', 'POST', { ...form });
        const token = response.data.tokens.accessToken;
        const userId = response.data.user.id;
        console.log(response.data.user.id);
        if (token) {
            setToken(token);
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
        } 
        console.log(token);

        }

    

    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4>Login</h4>
              </div>
              <div className="card-body">
                <form>
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
                  onClick={loginHandler1} disabled={loading}
                  >
                    Login
                  </button>
                   
                  <Link to={REGISTER}>Register</Link>
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

export default LoginPage;
