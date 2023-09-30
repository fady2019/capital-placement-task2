import React from 'react';

import classes from './search-input.styles.module.css';

import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { ReactComponent as WarningIcon } from '../../../assets/icons/warning.svg';

const SearchInput: React.FC<
    Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'>
> = (props) => {
    const { className, ...restProps } = props;

    const inputClassName = `${classes['search-input']} ${className || ''}`;

    return (
        <div className={classes['search-input-container']}>
            <SearchIcon />
            <input className={inputClassName} {...restProps} />
            <WarningIcon />
        </div>
    );
};

export default SearchInput;
