import React from "react";
import './footer.css'

const Footer = () => {



    return (
        <footer className='footer'>
            <ul>
                <li>
                    <ul>
                        <li><p>Ukrainian Catholic University</p></li>
                        <li><p>&copy; 2020 Shakhov Mykhailo. Ukrainian Catholic University</p></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><p id="footer-name">Shakhov Mykhailo</p></li>
                        <li>
                            <a href="https://github.com/shakhovm">
                                <img src={require("../../images/GitHub-Mark-Light-120px-plus.png")} alt=""
                                     width="20" height="20"/>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;