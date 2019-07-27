import React from 'react';
import './Loader.css';

const loader = (props) => {
    if(props.loader === true){
        return(
            <div className="loader_container">
                <div className="loader">
                    <img src={require('./giphy.gif')}></img>
                </div>
            </div>
        );
    }
    else{
        return null;
    }
}

export default loader;