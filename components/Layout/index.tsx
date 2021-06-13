import Header from "../Header/Header"

export interface Props {
    children: React.ReactChild;
}

const Layout = ({ children }: Props): React.ReactElement => {
    return (
        <>
            <Header serviceName="Social Care" />

            <div className="govuk-width-container">
                <main className="govuk-main-wrapper" id="content" role="main">
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;