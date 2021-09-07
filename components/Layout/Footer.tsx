import style from './Footer.module.scss';

const Footer = (): React.ReactElement => {
    return (
        <footer className={`${style.footer}`} role="contentinfo">
            <div className="govuk-width-container">
                <nav className={style.links}>
                    <a href="">
                        Give feedback
                    </a>
                </nav>


            </div>
        </footer>
    );
};

export default Footer;
