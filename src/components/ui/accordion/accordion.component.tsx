import React from 'react';

import AccordionItem from './accordion-item.component';

const Accordion: React.FC<{
    items: { id: string; header: React.ReactNode; content: React.ReactNode }[];
}> = (props) => {
    const { items } = props;

    return (
        <div>
            {items.map(({ id, header, content }, idx) => {
                return <AccordionItem key={id} header={header} content={content} />;
            })}
        </div>
    );
};

export default Accordion;
