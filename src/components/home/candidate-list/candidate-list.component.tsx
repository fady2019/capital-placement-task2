import List from '../../ui/list/list.component';

import CandidateListHeader from './candidate-list-header/candidate-list-header.component';
import CandidateItem from './candidate-item/candidate-item.component';

import { candidateList } from './dummy-candidate-list';

import classes from './candidate-list.styles.module.css';

const CandidateList = () => {
    const candidateCount = candidateList.length;

    return (
        <section className={classes['candidate-list-section']}>
            <CandidateListHeader candidateCount={candidateCount} />

            <List>
                {candidateList.map((candidate) => {
                    return (
                        <li key={candidate.id}>
                            <CandidateItem candidate={candidate} />
                        </li>
                    );
                })}
            </List>
        </section>
    );
};

export default CandidateList;
