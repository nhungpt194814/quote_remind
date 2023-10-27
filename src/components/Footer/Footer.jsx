import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';


const Footer = () => {
    const iconStyle = {
        margin: '5',
        width: '30',
        height: "30",
        color: 'var(--theme)'
    };
    return (
        <section className="f-wrapper">
            <div className="innerWidth f-container">
                <div className="flexColCenter f-right">
                    <div className="titleText">Contact</div>
                    <div className="f-social">
                        <a href='#'>
                            <FacebookIcon style={iconStyle} />
                        </a>
                        <a href='#'>
                            <InstagramIcon style={iconStyle} />
                        </a>
                        <a href='#'>
                            <GitHubIcon style={iconStyle} />
                        </a>
                    </div>
                    <div className="f-contact">
                        <PhoneIcon style={iconStyle}></PhoneIcon>
                        <span>+84 0123 456 78</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer