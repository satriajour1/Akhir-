import React from "react";
import "../App.css";
import { Button } from '@mui/material';

const Card = (props) => {
    return (
        <>
            {props.details.map((value, index) => (
                <div className="card" key={index}>
                    <div className="card-image">
                        <img src={value.img} />
                    </div>
                    <div>
                        <p className="card-title">{value.title}</p>
                        <p className="desc">{value.desc}</p>
                    </div>
                    <div className="btn">
                    <Button variant="contained" className="Play">PLAY</Button>
                    <Button variant="contained" className="Detail">DETAIL</Button>
                    </div>
                </div>
            ))};
        </>
    );
};

export default Card
