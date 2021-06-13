import React from 'react';

import Logo from './Logo'

const Header = ({ serviceName }: { serviceName: string }): React.ReactElement => {
    return (
        <header className="lbh-header ">
            <div className="lbh-header__main">
                <div className="lbh-container lbh-header__wrapper">
                    <div className="lbh-header__title">
                        <a href="/" className="lbh-header__title-link">
                            <Logo />
                            <span className="lbh-header__logo-text"> Hackney </span>
                            <span className="lbh-header__service-name">{serviceName}</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header