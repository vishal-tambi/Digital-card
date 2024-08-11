import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer(){
    return (
        <div className="Footer-icons">
            <a href="https://x.com/VishalTambi3"><TwitterIcon className="icon"/></a>
            <a href="https://www.facebook.com/profile.php?id=100080156887727"><FacebookIcon className="icon" /></a>
            <a href="https://www.instagram.com/yaa.its_vishal235/"><InstagramIcon className="icon" /></a>
            <a href="https://github.com/vishal-tambi"><GitHubIcon className="icon" /></a>
        </div>
    )
}