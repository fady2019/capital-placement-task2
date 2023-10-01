import React from 'react';
import ReactDOM from 'react-dom';

import classes from './backdrop.styles.module.css';

const Backdrop: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { show: boolean }
> = (props) => {
    const { className, show, ...restProps } = props;

    if (!show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={`${className} ${classes['backdrop']}`} {...restProps}></div>,
        document.getElementById('backdrop')!
    );
};

export default Backdrop;
