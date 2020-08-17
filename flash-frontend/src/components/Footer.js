import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__createdby">Created by:</div>
            <a href="https://github.com/douglasryu" className="footer__github">Douglas Ryu <GitHubIcon className="footer__logo" /></a>
            <a href="https://github.com/Aderyn1121" className="footer__github">Emily Burnham <GitHubIcon className="footer__logo" /></a>
            <a href="https://github.com/JBui923" className="footer__github">Johnny Bui <GitHubIcon className="footer__logo" /></a>
        </div>
    );
}

export default Footer;