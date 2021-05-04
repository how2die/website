import React, { useState, useEffect, useRef } from 'react';

const MessageField = () => {

    const [message, setMessage] = useState(null);

    const ws = useRef();

    useEffect(() => {
        if (!ws.current) {
            ws.current = new WebSocket("wss://ws.how2die.com");
            ws.current.onopen = () => {
                console.log('Connection opened!');
            }
            ws.current.onmessage = ({ data }) => setMessage(data);
            ws.current.onclose = function () {
                ws.current = null;
            }
        }
    });

    return (
        <input
            style={message === null ? { display: 'none'} : {}}
            type="text"
            value={message}
            onChange={e => {
                setMessage(e.target.value);
                ws.current.send(e.target.value);
            }} />
    );
};

export default MessageField;
