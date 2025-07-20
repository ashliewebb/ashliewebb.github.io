import React from 'react';
import styles from './KeyPoints.module.scss';

type KeyPointsProps = {
    project?: string;
    role?: string;
    timeline?: string;
    tools?: string;
    users?: string;
    responsibilities?: string;
}

export const KeyPoints = ({project, role, timeline, tools, users, responsibilities}: KeyPointsProps) => {
    return (
        <div className="section sectionBgAlt">
            <div className="sectionHeader headerCenter">
                <h2 className='heading heading2'>At a glance</h2>
            </div>
            <ul className={styles.highlights}>
                <li className={styles.highlightItem}>
                    <span className={`material-symbols-outlined ${styles.highlightItemIcon}`}>assignment</span>
                    <div>
                        <strong>Project</strong>
                        <p>{project}</p>
                    </div>
                </li>
                <li className={styles.highlightItem}>
                    <span className={`material-symbols-outlined ${styles.highlightItemIcon}`}>person_edit</span>
                    <div>
                        <strong>Role</strong>
                        <p>{role}</p>
                    </div>
                </li>
                <li className={styles.highlightItem}>
                    <span className={`material-symbols-outlined ${styles.highlightItemIcon}`}>calendar_clock</span>
                    <div>
                        <strong>Timeline</strong>
                        <p>{timeline}</p>
                    </div>

                </li>
                <li className={styles.highlightItem}>
                    <span className={`material-symbols-outlined ${styles.highlightItemIcon}`}>design_services</span>
                    <div>
                        <strong>Tools</strong>
                    <p>{tools}</p>
                    </div>
                </li>
                <li className={styles.highlightItem}>
                    <span className={`material-symbols-outlined ${styles.highlightItemIcon}`}>group</span>
                    <div>
                        <strong>Users</strong>
                        <p>{users}</p>
                    </div>
                </li>
                <li className={styles.highlightItem}>
                    <span className={`material-symbols-outlined ${styles.highlightItemIcon}`}>approval_delegation</span>
                    <div>
                        <strong>Responsibilities</strong>
                        <p>{responsibilities}</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
