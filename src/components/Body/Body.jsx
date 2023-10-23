import React from 'react'
import './Body.css'

const Body = () => {
    return (
        <section className="b-wrapper">
            <div className="paddings innerWidth flexCol b-container">
                <div className=" b-retro">It's a good idea to start saving and keeping track of your favorite sentences.</div>
                <div className="flexCol b-input-text">
                    <span >Your quote: <br /></span>
                    <input type="textarea" />
                </div>
                <div className=" flexStart b-input-frequency">
                    <span>Frequency: </span>
                    <input type="number" />
                    <span>times / month</span>
                </div>
                <button className='button'>Save</button>
            </div>
        </section>
    )
}

export default Body