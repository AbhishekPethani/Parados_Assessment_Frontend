import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import "./styles.css";

// URL of server where API is deployed 
const baseURL = 'http://ec2-3-82-22-147.compute-1.amazonaws.com:3000';

const Assessment = () => {

    const [result, setResult] = useState(null);
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');

    const handleKeyChange = (e) => {
        setKey(e.target.value);
    };

    const handleValueChange = (e) => {
        setValue(e.target.value);
    };

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
        if (!key.trim() || !value.trim()) {
            setResult("Key or Value is missing")
        }else{
            axios.post(baseURL + '/createTextRecord', {key, value})
            .then((res) => {
                setResult(res.data.result)
            })
            .catch((err) => console.log(err))
        }
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
                <Button onClick={handleUploadFile} label="Upload File" />
                <Button onClick={handleDownloadFile} label="Download File" />
                <div>
                    <label>
                        Key:
                        <input type="text" value={key} onChange={handleKeyChange} />
                    </label>
                    <br />
                    <label>
                        Vaue:
                        <input type="text" value={value} onChange={handleValueChange} />
                    </label>
                    <Button onClick={handleCreateTextRecord} label="Create Text Record" />
                </div>
                <Button onClick={handleRetrieveTextRecord} label="Retrieve Text Record" />
            </div>
            {result && <p> {result} </p>}
        </div>
    );
}
export default Assessment;