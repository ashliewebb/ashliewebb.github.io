import React from 'react';
import styles from './Card.module.scss';

type CardProps = {
    title: string;
    description: string;
    subtext?: string;
    link?: string;
}

export const Card = ({title, description, subtext, link}: CardProps) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{description}{subtext && (<em>{subtext}</em>)}</p>
            {link && (<p className={styles.cardLink}><a href={`https://${link}/`} title={`View the ${title} website`}>{link}</a></p>)}
        </div>
    )
}
