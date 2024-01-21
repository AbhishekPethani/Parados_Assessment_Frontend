import React, { useState } from 'react'
import Button from './Button';
import axios from 'axios';

export const CreateTextRecord = ({changeResult, baseURL}) => {
    const [collection, setCollection] = useState('');
    const [document, setDocument] = useState('');
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');

    const handleCreateTextRecord = () => {
        if (!collection.trim() || !document.trim() || !key.trim() || !value.trim()) {
            changeResult("Input Data is missing!!");
        } else {
            axios.post(baseURL + '/createTextRecord', { collection, document, data: { [key]: value } })
                .then((res) => {
                    changeResult(res.data.result);
                    setCollection('');
                    setDocument('');
                    setKey('');
                    setValue('');
                })
                .catch((err) => console.log(err));
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Collection:
                <input type="text" value={collection} onChange={(e) => setCollection(e.target.value)} />
            </label>
            <br />
            <label>Document:
                <input type="text" value={document} onChange={(e) => setDocument(e.target.value)} />
            </label>
            <br />
            <label>
                Key:
                <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
            </label>
            <br />
            <label>
                Value:
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            </label>
            <br />
            <Button onClick={handleCreateTextRecord} label="Create Text Record" />
        </div>
    )
}
