import React from 'react';
import styles from './Card.module.scss';
import Link from "next/link";
import Image from "next/image";

type CardProps = {
    icon?: string;
    image?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    title: string;
    description?: string;
    subtitle?: string;
    link?: string;
    linkText?: string;
    linkTitle?: string;
    linkTarget?: string;
}

export const Card = ({icon, image, imageAlt, imageWidth, imageHeight, title, description, link, linkText, linkTitle, linkTarget, subtitle}: CardProps) => {
    return (
        <div className='card'>
            {link ? (
                <Link href={link} title={linkTitle} target={linkTarget}>
                    {image && (
                        <Image className='card__image' src={image} alt={imageAlt || ''} width={imageWidth} height={imageHeight}></Image>
                    )}
                    {icon && (
                        <span className={`material-symbols-outlined ${styles.cardIcon}`}>{icon}</span>
                    )}
                    {subtitle && <strong className='introtext'>{subtitle}</strong>}
                    <h3>{title}</h3>
                    {description && <div className='card__desc' dangerouslySetInnerHTML={{ __html: description }}></div>}
                    {linkText && <p className="buttonText">{linkText}</p>}
                </Link>
            ) : (
                <>
                    {image && (
                        <Image className='card__image' src={image} alt={imageAlt || ''} width={imageWidth} height={imageHeight}></Image>
                    )}
                    {icon && (
                        <span className='material-symbols-outlined card-icon'>{icon}</span>
                    )}
                    <h3>{title}</h3>
                    {description && <p>{description}</p>}
                </>
            )}
        </div>
    )
}
