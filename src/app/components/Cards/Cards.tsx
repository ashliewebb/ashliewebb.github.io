import React from 'react';
import stylesGlobal from '@/app/page.module.scss';
import styles from './Cards.module.scss';

type CardsProps = {
    heading?: string;
    copy?: string;
    bg_alt?: string;
    grid?: number;
    children: React.ReactNode;
}

export const Cards = ({heading, copy, bg_alt, grid, children}: CardsProps) => {
    const gridClass = `grid grid-col-${grid}`;

    return (
        <div className={`${styles.cards} ${stylesGlobal.decoBorderBottom} ${bg_alt ? stylesGlobal.sectionBgHighlight : ''}`}>
            {heading && <h2 className={`${stylesGlobal.heading} ${stylesGlobal.heading2}`}>{heading}</h2>}
            <div className={gridClass}>
                {copy && <p>{copy}</p>}
                {children}
            </div>
        </div>
    )
}
