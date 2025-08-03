import React from 'react';
import styles from './Image.module.scss';

type ImageTextProps = {
    image?: string;
    imageSquare?: string;
    imageAlt?: string;
    caption?: string;
    bgColour?: string;
}

export const Image = ({image, imageSquare, imageAlt, caption, bgColour}: ImageTextProps) => {
    return (
        <div className={`section sectionNoPaddingTop ${styles.image}`} style={{ backgroundColor: bgColour }}>
            <picture>
                <source srcSet={imageSquare} media={`(max-width: 650px)`} />
                <img className={styles.imageImage} src={image} alt={imageAlt || ''} />
            </picture>
            {caption && (
                <div className={styles.imageCaption} dangerouslySetInnerHTML={{ __html: caption }}></div>
            )}
        </div>
    )
}
