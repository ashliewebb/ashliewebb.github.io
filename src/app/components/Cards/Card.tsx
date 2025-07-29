import React from 'react';
import styles from './Card.module.scss';
import Link from "next/link";
import Image from "next/image";

type CardProps = {
    icon?: string;
    image?: string;
    imageSquare?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    title: string;
    description?: string;
    descriptionHTML?: string;
    subtitle?: string;
    link?: string;
    linkText?: string;
    linkTitle?: string;
    linkTarget?: string;
}

export const Card = ({icon, image, imageSquare, imageAlt, imageWidth, imageHeight, title, description, descriptionHTML, link, linkText, linkTitle, linkTarget, subtitle}: CardProps) => {
    return (
        <div className='card'>
            {link ? (
                <Link href={link} title={linkTitle} target={linkTarget} className={linkTarget ? 'cardLinkBlank' : ''}>
                    {image && (
                        <picture>
                            <source srcSet={imageSquare} media={`(max-width: 650px)`} />
                            <Image className='card__image' src={image} alt={imageAlt || ''} width={imageWidth} height={imageHeight}></Image>
                        </picture>
                    )}
                    {icon && (
                        <span className={`material-symbols-outlined ${styles.cardIcon}`}>{icon}</span>
                    )}
                    <h3>{title}</h3>
                    {subtitle && <strong className='introtext'>{subtitle}</strong>}
                    {description && <p className='card__desc'>{description}</p> }
                    {descriptionHTML && <div className='card__desc' dangerouslySetInnerHTML={{ __html: descriptionHTML }}></div>}
                    {linkText && <p className="buttonText">{linkText}</p>}
                </Link>
            ) : (
                <>
                    {image && (
                        <picture>
                            <source srcSet={imageSquare} media={`(max-width: 650px)`} />
                            <Image className='card__image' src={image} alt={imageAlt || ''} width={imageWidth} height={imageHeight}></Image>
                        </picture>
                    )}
                    {icon && (
                        <span className='material-symbols-outlined card-icon'>{icon}</span>
                    )}
                    <h3>{title}</h3>
                    {subtitle && <strong className='introtext'>{subtitle}</strong>}
                    {description && <p className='card__desc'>{description}</p> }
                    {descriptionHTML && <div className='card__desc' dangerouslySetInnerHTML={{ __html: descriptionHTML }}></div>}
                </>
            )}
        </div>
    )
}
