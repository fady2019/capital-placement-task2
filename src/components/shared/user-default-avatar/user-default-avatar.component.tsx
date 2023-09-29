import React from 'react';

import classes from './user-default-avatar.styles.module.css';

const UserDefaultAvatar: React.FC<{ size: number; label: string }> = (props) => {
    const { size, label } = props;

    return (
        <div className={classes['default-avatar']} style={{ '--ava-size': `${size}px` } as any}>
            {label}
        </div>
    );
};

export default UserDefaultAvatar;
