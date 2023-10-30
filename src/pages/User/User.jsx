import React from 'react'
import './User.css'
import Body from '../../components/Body/Body'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/Footer/Footer'
import UserStorage from '../../components/UserStorage/UserStorage'
import '../../App.css';

const User = () => {
    return (
        <div className="App">
            <Body></Body>
            <UserStorage></UserStorage>
            <Bottom></Bottom>
            <Footer></Footer>
        </div>
    )
}

export default User