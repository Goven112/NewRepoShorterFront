import React from 'react';
import {Link} from "react-router-dom";
import {LINK} from "../common/navigation/routes";

const LinkItem = ({link}) => {
    const { actualLink, displayName, id} = link;
    return (
        <div style={{marginTop: 10, borderBottom: '1px solid black'}}>
            <p><a style={{marginRight: 10}} href={actualLink}>{actualLink}</a> -&gt; <a style={{marginRight: 10}} href={actualLink}>{displayName}</a></p>
          
            <Link to={`${LINK}/${id}`}>Details</Link>
        </div>
    );
};

export default LinkItem;
