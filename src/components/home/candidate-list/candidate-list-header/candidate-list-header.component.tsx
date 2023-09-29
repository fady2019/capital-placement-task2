import React from 'react';

import Checkbox from '../../../ui/checkbox/checkbox.component';
import List from '../../../ui/list/list.component';

import classes from './candidate-list-header.styles.module.css';

const CandidateListHeader: React.FC<{ candidateCount: number }> = ({ candidateCount }) => {
    return (
        <header className={classes['candidate-list__header']}>
            <div className={classes['left']}>
                <Checkbox />

                <h3>
                    {candidateCount} {candidateCount === 1 ? 'Candidate' : 'Candidates'}
                </h3>
            </div>

            <List className={classes['right']}>
                <li className={classes['active']}>Qualified</li>

                <span className={classes['separator']}></span>

                <li>
                    Task <span>25</span>
                </li>

                <span className={classes['separator']}></span>

                <li>
                    Disqualified <span>78</span>
                </li>
            </List>
        </header>
    );
};

export default CandidateListHeader;
