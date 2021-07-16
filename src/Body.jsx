import React from 'react';
import Button from './Button';

const Body = () =>{
    return(
        <>
        <div className="inner_container">
            <h2>Hello Everyone!!..</h2>
            <div className="btn_div">
            <Button  btnname = "Apple 🍎"/>
            <Button  btnname = "Bannana 🍌"/>
            <Button  btnname = "Mango 🥭"/>
            </div>
        </div>
        </>
    )
}

export default Body;