import React, { useState } from 'react';

import classes from './accordion-item.styles.module.css';

import { ReactComponent as CartDown } from '../../../assets/icons/caret_down.svg';

const AccordionItem: React.FC<{ header: React.ReactNode; content: React.ReactNode }> = (props) => {
    const { header, content } = props;

    const [isOpened, setIsOpened] = useState<boolean>(false);

    const toggleAccordionItemHandler = () => {
        setIsOpened((state) => !state);
    };

    const accordionItemClassName = `${classes['accordion-item']} ${isOpened && classes['opened']}`;

    return (
        <div className={accordionItemClassName}>
            <button className={classes['accordion-item__header-btn']} onClick={toggleAccordionItemHandler}>
                <span className={classes['accordion-item__header-btn-text']}>{header}</span>

                <CartDown className={classes['accordion-item__header-btn-icon']} />
            </button>

            {isOpened && <div className={`${classes['accordion-item__content']} scrollable`}>{content}</div>}
        </div>
    );
};

export default AccordionItem;
