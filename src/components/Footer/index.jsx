import React from 'react';
import './index.less';

const Footer = () => {
    console.log('footer');
    return (
        <div className='footer container'>
            <span className='license'>
                ©
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/kunkkaliu/'>kunkkaliu </a>
                <a target='_blank' rel="noopener noreferrer" href='http://www.miitbeian.gov.cn/'>京ICP备17069909号</a>
            </span>
        </div>
    );
};

export default Footer;
