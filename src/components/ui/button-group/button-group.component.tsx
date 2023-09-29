import React from 'react';

import classes from './button-group.styles.module.css';

const ButtonGroup: React.FC<
    React.PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
> = (props) => {
    const { className, ...restProps } = props;

    const buttonGroupClassName = `${className || ''} ${classes['button-group']}`;

    return <div className={buttonGroupClassName} {...restProps}></div>;
};

export default ButtonGroup;
