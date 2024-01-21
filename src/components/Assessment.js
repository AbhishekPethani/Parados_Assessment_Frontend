import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import "./styles.css";

// URL of server where API is deployed 
const baseURL = 'https://ec2-3-82-22-147.compute-1.amazonaws.com:3000';

const Assessment = () => {

    const [result, setResult] = useState(null);

    const handleUploadFile = () => {
        axios.post(baseURL + '/uploadFile')
        .then((res) => {
            setResult(res.data.result)
        })
        .catch((err) => console.log(err))
    }

    const handleDownloadFile = () => {
        axios.get(baseURL + '/downloadFile')
        .then((res) => {
            setResult(res.data.result)
        })
        .catch((err) => console.log(err))
    }

    const handleCreateTextRecord = () => {
        axios.post(baseURL + '/createTextRecord')
        .then((res) => {
            setResult(res.data.result)
        })
        .catch((err) => console.log(err))
    }

    const handleRetrieveTextRecord = () => {
        axios.get(baseURL + '/retrieveTextrecord')
        .then((res) => {
            setResult(JSON.stringify(res.data.result))
        })
        .catch((err) => console.log(err))
    }

    return (
        <div> 
            <div className="container">
                <Button onClick= {handleUploadFile} label="Upload File"/>
                <Button onClick= {handleDownloadFile} label="Download File"/>
                <Button onClick= {handleCreateTextRecord} label="Create Text Record"/>
                <Button onClick= {handleRetrieveTextRecord} label="Retrieve Text Record"/>
            </div>
            {result && <p> {result} </p>}
        </div>
    );
}
export default Assessment;