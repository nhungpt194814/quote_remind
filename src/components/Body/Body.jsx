import React, { useState } from 'react'
import './Body.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Body = ({ onSave, setOnSave }) => {
    const { id } = useParams();
    const [enterContent, setEnterContent] = useState('');
    const [enterFrequency, setEnterFrequency] = useState('');

    const handleEnterContent = (e) => {
        setEnterContent(e.target.value);
    }

    const handleEnterFrequency = (e) => {
        setEnterFrequency(e.target.value);
    }

    const handleSaveNewQuote = async () => {
        try {
            const res = await axios.post(
                `http://localhost:3000/quote/`,
                {
                    "userId": id,
                    "content": enterContent,
                    "frequency": enterFrequency
                }
            );
            console.log(res);
            setOnSave(1);

            setEnterContent('');
            setEnterFrequency('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="b-wrapper">
            <div className="paddings innerWidth flexCol b-container">
                <div className=" b-retro">It's a good idea to start saving and keeping track of your favorite sentences.</div>
                <div className="flexCol b-input-text" >
                    <span >Your quote: <br /></span>
                    <input type="textarea" value={enterContent} onChange={(e) => handleEnterContent(e)}/>
                </div>
                <div className=" flexStart b-input-frequency" >
                    <span>Frequency: </span>
                    <input type="string" value={enterFrequency} onChange={(e) => handleEnterFrequency(e)}/>
                    <span>crontime</span>
                </div>
                <div className=" flexStart">
                    <span>Input: "5 4 * * *"</span>
                </div>
                <div className=" flexStart">
                    <span>Output: "next at 2024-01-19 04:05:00"</span>
                </div>
                <button className='button' onClick={() => handleSaveNewQuote()}>Save</button>
            </div>
        </section>
    )
}

export default Body