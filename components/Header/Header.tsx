import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Logo from "./Logo";

const loggedInNavLinks = [
  {
    name: "All Projects",
    path: "/",
  },
  {
    name: "My Projects",
    path: "/my-projects",
  },
  {
    name: "Sign Out",
    path: "/logout",
  },
];

const Header = ({
  serviceName,
}: {
  serviceName: string;
}): React.ReactElement => {
  const [navLinks, setNavLinks] = useState<typeof loggedInNavLinks>();
  const { pathname } = useRouter();
  useEffect(() => {
    setNavLinks(loggedInNavLinks);
  }, [pathname]);
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

          <nav className="lbh-header__links">
            {navLinks && (
              <>
                {navLinks.map(({ name, path }) => (
                  <Link href={path} key={path}>
                    <a className="govuk-header__link">{name}</a>
                  </Link>
                ))}
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
