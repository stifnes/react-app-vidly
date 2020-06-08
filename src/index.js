import React from "react";
import ReactDOM from "react-dom";
import Movies from "./components/movies";
import "bootstrap/dist/css/bootstrap.css";
import './styles/style.css';
import './styles/fontawesome.min.css';
import "font-awesome/css/font-awesome.css";

ReactDOM.render( 
    <div className = "container py-5" >
    <Movies / >
    </div>,
    document.getElementById("root")
);