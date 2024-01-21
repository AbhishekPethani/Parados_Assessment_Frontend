import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import "./styles.css";
import { CreateTextRecord } from "./CreateTextRecord";
import { RetrieveTextRecord } from "./RetrieveTextRecord";

// URL of server where API is deployed 
const baseURL = 'http://ec2-3-82-22-147.compute-1.amazonaws.com:3000';

export const Assessment = () => {

    const [result, setResult] = useState(null);
    
    const changeResult = (newResult) => {
        setResult(newResult);
    }
    const handleUploadFile = () => {
        axios.post(baseURL + '/uploadFile')
            .then((res) => {
                changeResult(res.data.result)
            })
            .catch((err) => console.log(err))
    }

    const handleDownloadFile = () => {
        axios.get(baseURL + '/downloadFile')
            .then((res) => {
                changeResult(res.data.result)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <div className="container">
                <Button onClick={handleUploadFile} label="Upload File" />

                <Button onClick={handleDownloadFile} label="Download File" />

                <CreateTextRecord changeResult={changeResult} baseURL={baseURL} />

                <RetrieveTextRecord changeResult={changeResult} baseURL={baseURL} />
            </div>
            {result && <p> {result} </p>}
        </div>
    );
}