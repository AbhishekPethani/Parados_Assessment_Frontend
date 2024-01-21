import React, { useState } from 'react'
import Button from './Button';
import axios from 'axios';

export const RetrieveTextRecord = ({ changeResult, baseURL }) => {
    const [collection, setCollection] = useState('');
    const [document, setDocument] = useState('');
    const handleRetrieveTextRecord = () => {
        if (!collection.trim() || !document.trim()) {
            changeResult("Input Data is missing!!");
        } else {
            axios.get(baseURL + '/retrieveTextrecord/' + collection + "/" + document)
            .then((res) => {
                changeResult(JSON.stringify(res.data.result))
            })
            .catch((err) => console.log(err));
        }
    }
    return (
        <div>
            <label>Collection:
                <input type="text" value={collection} onChange={(e) => setCollection(e.target.value)} />
            </label>
            <br />
            <label>Document:
                <input type="text" value={document} onChange={(e) => setDocument(e.target.value)} />
            </label>
            <br />
            <Button onClick={handleRetrieveTextRecord} label="Retrieve Text Record" />
        </div>
    )
}
