import React from 'react';
import LinkItem from "./LinkItem";

const LinksTable = ({links, loading}) => {

    if (loading) {
        return <div>loading...</div>
    }

    if (links && !links.length) {
        return <div>No links</div>
    }

    return (
        <div style={{marginTop: 40}}>
            {links && links.map((link) => (
                <LinkItem key={link.id} link={link} />
            ))}
        </div>
    );
};

export default LinksTable;
