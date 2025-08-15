import React from 'react';
import Link from "next/link";

type CardsProps = {
    heading?: string;
    copy?: string;
    bgAlt?: boolean;
    grid?: number;
    headerCenter?: boolean;
    cardStyle?: string;
    ctaLink?: string;
    ctaLabel?: string;
    ctaStyle?: string;
    ctaTarget?: string;
    children: React.ReactNode;
}

export const Cards = ({heading, copy, bgAlt, grid, headerCenter, cardStyle, ctaLink, ctaLabel, ctaStyle, ctaTarget, children}: CardsProps) => {
    const gridClass = `grid grid-col-${grid}`;

    const cardsStyle = (cardStyle === 'roundedCard'
        ? 'cardsRounded'
        : cardStyle === 'squareCard'
            ? 'cardsSquared'
            : cardStyle === 'featureCard'
                ? 'cardsFeatured'
                : '')

    const ctaLinkStyle = (ctaStyle === 'cardCTAButton'
        ? `buttonPrimary`
        : ctaStyle === 'cardCTAText'
            ? `buttonText`
            : "")


    return (
        <div className={`section ${bgAlt ? 'sectionBgAlt' : ''}`}>
            <div className={`sectionHeader ${headerCenter && 'headerCenter'}`}>
                {heading && <h2 className='heading heading2'>{heading}</h2>}
                {copy && <p>{copy}</p>}
            </div>
            <div className={`${cardsStyle} ${gridClass}`}>
                {children}
            </div>
            {ctaLink && (<div className={`cardCTA ${ctaStyle}`}>
                <Link className={ctaLinkStyle} href={ctaLink} target={ctaTarget}>{ctaLabel}</Link>
            </div>)}
        </div>
    )
}
