import Accordion from '../../ui/accordion/accordion.component';
import List from '../../ui/list/list.component';
import SearchInput from '../../ui/search-input/search-input.component';

import classes from './home-filters.styles.module.css';

import { ReactComponent as DocIcon } from '../../../assets/icons/doc_small.svg';

const DUMMY_CONTENT =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam odit laboriosam? Distinctio doloribus libero consequatur illum possimus? Cumque amet architecto nemo explicabo ea odio minima molestiae inventore soluta consequuntur.';

const HomeFilters = () => {
    return (
        <div className={classes['home-filters']}>
            <SearchInput placeholder="Search by name, edu, exp or #tag" />

            <List className={classes['filter-list']}>
                <li className={classes['home-filters__title']}>
                    <h2>Filters</h2> <span>0 Selected</span>
                </li>

                <li>
                    <Accordion
                        items={[
                            { id: '0', header: <div className={classes['filter-item']}><DocIcon/> Personal Information</div>, content: DUMMY_CONTENT },
                            { id: '1', header: <div className={classes['filter-item']}><DocIcon/> Education</div>, content: DUMMY_CONTENT },
                            { id: '2', header: <div className={classes['filter-item']}><DocIcon/> Work Experience</div>, content: DUMMY_CONTENT },
                            { id: '3', header: <div className={classes['filter-item']}><DocIcon/> Activity Filter</div>, content: DUMMY_CONTENT },
                        ]}
                    />
                </li>

                <li className={`${classes['home-filters__advanced-filters']} ${classes['filter-item']}`}>
                    <DocIcon /> Advanced Filter
                </li>
            </List>
        </div>
    );
};

export default HomeFilters;
