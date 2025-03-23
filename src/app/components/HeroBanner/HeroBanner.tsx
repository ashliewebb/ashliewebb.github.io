import React from 'react';
import stylesGlobal from '@/app/page.module.scss';
import styles from './HeroBanner.module.scss';
import Link from "next/link";

type HeroBannerProps = {
    title: string;
    description: string;
    ctaLink?: string;
    ctaLabel?: string;
    bg_image?: boolean;
}

export const HeroBanner = ({title, description, ctaLink, ctaLabel, bg_image}: HeroBannerProps) => {
    return (
        <div className={`${styles.heroBanner} ${stylesGlobal.decoBorderBottom} ${bg_image ? styles.heroBannerBgImage : ''}`}>
            <div className={styles.heroBannerContent}>
                <h1 className={`${stylesGlobal.heading} ${stylesGlobal.heading1}`}>{title}</h1>
                <p>{description}</p>
                {ctaLink && <Link className={stylesGlobal.buttonPrimary} href={ctaLink}>{ctaLabel}</Link>}
            </div>
        </div>
    )
}
