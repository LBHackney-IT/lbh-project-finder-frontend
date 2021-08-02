import Router from 'next/router';
import cx from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
    onClick?: () => unknown,
    route?: string,
    isSecondary?: boolean;
}

const Button = ({ label, onClick, route, isSecondary, ...otherProps }: ButtonProps): React.ReactElement => {
    const handleClick = () => {
        onClick?.();
        route && Router.push(`${route}`)
    }
    return (
        <button className={cx(
            'lbh-button govuk-button',
            {
                'lbh-button--secondary': isSecondary,
            })} data-module="govuk-button" onClick={handleClick} {...otherProps} >
            {label}
        </button>
    );
};

export default Button