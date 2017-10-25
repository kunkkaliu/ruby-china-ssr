import React from 'react';
import './index.less';

const Footer = () => {
    console.log('footer');
    return (
        <div className='footer container'>
            <span className='license'>
                Designed by
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/kunkkaliu/react-redux-bootstrap'>  kunkkaliu</a>
                © 2017
            </span>
        </div>
    );
};

export default Footer;
