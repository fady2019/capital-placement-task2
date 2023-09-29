import React from 'react';

import Checkbox from '../../../ui/checkbox/checkbox.component';
import UserDefaultAvatar from '../../../shared/user-default-avatar/user-default-avatar.component';

import { ICandidate } from '../../../../models/candidate.model';

import classes from './candidate-item.styles.module.css';

import { ReactComponent as VideoIcon } from '../../../../assets/icons/video.svg';
import { ReactComponent as NotebookIcon } from '../../../../assets/icons/notebook-small.svg';

const CandidateItem: React.FC<{ candidate: ICandidate }> = (props) => {
    const { candidate } = props;
    const { fName, lName } = candidate.name;
    const { city, country } = candidate.location;
    const { degree, university, startYear, endYear } = candidate.education;
    const { hashTags, tags, videoCount, programCount } = candidate;

    const fullName = `${fName} ${lName}`;
    const defaultAvatarLabel = fName[0].toUpperCase() + lName[0].toUpperCase();

    const location = `${city}, ${country}`;
    const education = `${degree} - ${university} (${startYear} - ${endYear})`;

    return (
        <div className={classes['candidate-item-container']}>
            <Checkbox />

            <div className={classes['candidate-item']}>
                <UserDefaultAvatar size={56} label={defaultAvatarLabel} />

                <div className={classes['candidate-item__info']}>
                    <h4 className={classes['candidate-name']}>{fullName}</h4>
                    <p className={classes['candidate-location']}>{location}</p>
                    <p className={classes['candidate-education']}>{education}</p>

                    {hashTags.length > 0 && (
                        <div className={classes['hash-tags']}>
                            {hashTags.map((hashTag, idx) => (
                                <span key={idx}>#{hashTag}</span>
                            ))}
                        </div>
                    )}

                    {tags.length > 0 && (
                        <div className={classes['tags']}>
                            {tags.map((tag, idx) => (
                                <span key={idx}>{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className={classes['candidate-extra']}>
                {videoCount && (
                    <span>
                        <VideoIcon />
                        {videoCount}
                    </span>
                )}

                {programCount && (
                    <span>
                        <NotebookIcon />
                        {programCount} {programCount === 1 ? 'Program' : 'Programs'}
                    </span>
                )}
            </div>
        </div>
    );
};

export default CandidateItem;
