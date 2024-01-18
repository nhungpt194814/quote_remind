import React, { useState } from 'react'
import './User.css'
import Body from '../../components/Body/Body'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/Footer/Footer'
import UserStorage from '../../components/UserStorage/UserStorage'
import '../../App.css';

const User = () => {
    const [dataSave, setDataSave] = useState(0);
    return (
        <div className="App">
            <Body onSave={dataSave} setOnSave={setDataSave}></Body>
            <UserStorage onSave={dataSave} setOnSave={setDataSave}></UserStorage>
            <Bottom></Bottom>
            <Footer></Footer>
        </div>
    )
}

export default User