import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Result.css";

const Result = ({name,score}) => {
    // const history=useHistory();
    const navigate=useNavigate();

    useEffect(()=>{
        if(!name){
            // history.pushState("/");
            navigate("/result");
        }
    },[name,navigate]);
    return (
        <div className="result">
            <span className="title">Final Score :{score}</span>
            <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{alignSelf:"center",margingTop:20}}
            href="/"
            >Go to Homepage</Button>
        </div>
    )
}

export default Result
