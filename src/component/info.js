import React from "react";
import myImage from '../images/vt2.png'
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Info() {
    return (
        <div className="info">
            <img className="" src={myImage} alt="Vishal Tambi" />
            <h1>Vishal Tambi</h1>
            <bold>Full Stackdeveloper, From India</bold>
            <a href="https://nssamityuniversityrajasthan-vishal-tambis-projects.vercel.app/">www.vishaltambi.com</a>
            <div className="container">
                <div className="box">
                    <MailIcon className="icons" />
                    <a href="tambivishal3@gmail.com">Email</a>
                </div>
                <div className="box box2">
                    <LinkedInIcon className="icons" />
                    <a href="https://www.linkedin.com/in/vishal-tambi-b180b724b/">Linkedin</a>
                </div>
            </div>
        </div>
    )
}

