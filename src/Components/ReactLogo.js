import React from "react";
import '../App.css';
import logo from './logo.svg'

function ReactLogo (){
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    )
}
export default ReactLogo;