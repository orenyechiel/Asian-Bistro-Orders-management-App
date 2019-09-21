import React from 'react';
import '../style/footer.css';
import propTypes from 'prop-types';
import github from '../images/github.png'


const Footer = props => {
    const {content} = props;
    return (
        <footer>
            <div className="content">    
                <p>{content}</p>
                <span>visit me on <a href="www.github.com">Github <img src={github} alt="" /></a></span>
            </div>
        </footer>
    )
}

Footer.defaultProps = {
    content: 'Created by Oren Pesachov'
}

Footer.propTypes = {
    content: propTypes.string
}

export default Footer;
