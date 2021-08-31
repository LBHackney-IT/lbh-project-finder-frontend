import React from "react";
import Link from "next/link";

import Logo from "./Logo";
import { useAuth } from "../UserContext/UserContext";

const Header = ({
  serviceName,
}: {
  serviceName: string;
}): React.ReactElement => {
  const { user } = useAuth();

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

          {user && (
            <nav className="lbh-header__links">
              <Link href="/">
                <a className="govuk-header__link">All projects</a>
              </Link>
              <Link href="/my-projects">
                <a className="govuk-header__link">My projects</a>
              </Link>
              <Link href="/logout">
                <a className="govuk-header__link">Sign out</a>
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
