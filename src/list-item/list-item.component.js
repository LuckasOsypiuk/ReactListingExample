import React from 'react';

const ListItem = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.lead}</p>
                <a href={props.url} className="btn btn-primary" target="_blank">Czytaj dalej!</a>
            </div>
        </div>
    );
};

export default ListItem;