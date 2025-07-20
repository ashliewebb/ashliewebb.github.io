import React from 'react';
import Link from "next/link";
import Image from "next/image";

type HeroBannerProps = {
    breadcrumb?: string;
    introtext?: string;
    title: string;
    description?: string;
    ctaLink?: string;
    ctaLabel?: string;
    ctaTarget?: string;
    ctaLink2?: string;
    ctaLabel2?: string;
    ctaTarget2?: string;
    imageUrl?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
}

export const HeroBanner = ({breadcrumb, introtext, title, description, ctaLink, ctaLabel, ctaTarget, ctaLink2, ctaLabel2, ctaTarget2, imageUrl, imageAlt, imageWidth, imageHeight}: HeroBannerProps) => {
    return (
        <div className={`section ${imageUrl && 'sectionHasImage'}`}>
            <div className='sectionContent'>
                {breadcrumb && <strong className='breadcrumb' dangerouslySetInnerHTML={{ __html: breadcrumb }} />}
                {introtext && <strong className='introtext' dangerouslySetInnerHTML={{ __html: introtext }} />}
                <h1 className='heading heading1'>{title}</h1>
                {description && <div className='text' dangerouslySetInnerHTML={{ __html: description }} />}
                {ctaLink && (
                    <div className='ctas'>
                        {ctaLink && <Link className='buttonPrimary' href={ctaLink} target={ctaTarget}>{ctaLabel}</Link>}
                        {ctaLink2 && <Link className='buttonPrimary' href={ctaLink2} target={ctaTarget2}>{ctaLabel2}</Link>}
                    </div>
                    )}
            </div>
            {imageUrl && (
                <div className={`sectionImage`}>
                    <div className='heroImage'>
                        <Image src={imageUrl} alt={imageAlt || ''} width={imageWidth} height={imageHeight}></Image>
                    </div>
                </div>
            )}
        </div>
    )
}
