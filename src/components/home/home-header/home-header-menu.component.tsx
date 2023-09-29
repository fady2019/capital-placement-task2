import SelectMenu from '../../ui/select-menu/select-menu.component';

import classes from './home-header.styles.module.css';

const SELECT_MENU_OPTIONS = [
    { id: 'applied', label: 'Applied', placementTag: 1745 },
    { id: 'shortlisted', label: 'Shortlisted', placementTag: 453 },
    { id: 'technical-interview', label: 'Technical Interview', placementTag: 123 },
    { id: 'opportunity-browsing', label: 'Opportunity Browsing', placementTag: 243 },
    { id: 'video-interview-i', label: 'Video Interview I', placementTag: 25 },
    { id: 'video-interview-ii', label: 'Video Interview II', placementTag: 25 },
    { id: 'video-interview-iii', label: 'Video Interview III', placementTag: 25 },
    { id: 'offer', label: 'Offer', placementTag: 25 },
    { id: 'withdrawn', label: 'Withdrawn', placementTag: 25 },
];

const HomeHeaderMenu = () => {
    return (
        <div className={classes['home-header__select-menu']}>
            <SelectMenu
                label="Menu"
                options={SELECT_MENU_OPTIONS.map(({ id, label, placementTag }) => {
                    return {
                        id,
                        label,
                        placementTag,
                    };
                })}
                defaultValue="opportunity-browsing"
            />
        </div>
    );
};

export default HomeHeaderMenu;
