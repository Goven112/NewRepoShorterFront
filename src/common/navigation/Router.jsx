import React from 'react';
import {Navigate, Route, Routes as ReactRoutes} from 'react-router-dom';

import {ABOUT, LINK, LINKS, LOGIN, REGISTER} from './routes';
import LoginPage from "../../pages/LoginPage";
import LinksPage from "../../pages/LinksPage";
import RegisterPage from "../../pages/RegisterPage";
import LinkPage from "../../pages/LinkPage";
import AboutPage from "../../pages/AboutPage";


const Routes = (props) => {
    const {token} = props;
    return (
        <ReactRoutes>
            {!!token ? (
                <>
                    <Route path={LINKS} element={<LinksPage {...props} />} caseSensitive/>
                    <Route path={`${LINK}/:id`} element={<LinkPage {...props} />} caseSensitive/>
                    <Route path={ABOUT} element={<AboutPage {...props} />} caseSensitive/>
                    <Route path={'*'} element={<Navigate to={LINKS}/>}/>
                </>
            ) : (
                <>
                    <Route path={LOGIN} element={<LoginPage {...props} />} caseSensitive/>
                    <Route path={REGISTER} element={<RegisterPage {...props} />} caseSensitive/>
                    <Route path={ABOUT} element={<AboutPage {...props} />} caseSensitive/>
                    <Route path={'*'} element={<Navigate to={LOGIN}/>}/>
                </>
            )}
        </ReactRoutes>
    );
};

export default Routes;
