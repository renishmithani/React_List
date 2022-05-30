import React from "react";
import Style from "./Carlist.module.css";

const Carlist = (props) => {
    return (
        <center>
            <div className={Style.main}>
                <button onClick={props.click}>Remove</button>
                {props.name} - {props.model} <br />
                <li>{props.dec}</li>
            </div>
        </center>
    );
};

export default Carlist;
