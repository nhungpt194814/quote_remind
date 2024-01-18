import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                {/* nav bar */}
                <div className="flexCenter innerWidth h-navbar">
                    <img className='logo' src="./logo.png" alt="logo" width={100} />
                    <div className="h-menu">
                        <a href="">Home</a>
                        <a href="">Our value</a>
                        <a href="">Contact us</a>
                        <a href="">Get started</a>

                        <div className="button-group">
                            <button className="button">
                                <a href="http://localhost:5173/login">Log in</a>
                            </button>
                            <button className="button">
                                <a href="">Sign up</a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* decor */}
                <div className="innerWidth flexCenter h-decor ">
                    {/* left side */}
                    <div className="flexColStart h-leftside">
                        <div className="h-slogan">
                            <h1>Quote reminder,
                                <br />
                                Book remember
                            </h1>
                        </div>
                        <div className="flexColStart h-description">
                            <span>"Ứng dụng Quote Reminder giúp bạn lưu trữ và nhắc nhở về các trích dẫn yêu thích từ sách. </span>
                            <span>Book Remember là một công cụ thuận tiện để ghi chú và theo dõi các thông tin quan trọng trong sách mà bạn đọc."</span>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="h-rightside">
                        <div className="image-container">
                            <img src="./prince_hotel_view.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header