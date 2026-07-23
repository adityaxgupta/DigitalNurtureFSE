import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
    const { code, name, startDate, status, coach, trainer } = props;

    // Apply green if status is 'Ongoing', otherwise blue
    const headerStyle = {
        color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
    };

    return (
        <div className={styles.box}>
            <h3 style={headerStyle}>{code} -{name}</h3>
            <dl>
                <dt>Started On</dt>
                <dd>{startDate}</dd>
                <dt>Current Status</dt>
                <dd>{status}</dd>
                <dt>Coach</dt>
                <dd>{coach}</dd>
                <dt>Trainer</dt>
                <dd>{trainer}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;