import Router from 'next/router';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
    onClick?: () => unknown,
    route?: string
}

const Button = ({ label, onClick, route }: ButtonProps): React.ReactElement => {
    const handleClick = () => {
        onClick?.();
        route && Router.push(`${route}`)
    }
    return (
        <button className="govuk-button lbh-button" data-module="govuk-button" onClick={handleClick}>
            {label}
        </button>
    );
};

export default Button