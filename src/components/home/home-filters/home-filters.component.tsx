import SearchInput from '../../ui/search-input/search-input.component';

import classes from './home-filters.styles.module.css';

const HomeFilters = () => {
    return (
        <div className={classes['home-filters']}>
            <SearchInput placeholder="Search by name, edu, exp or #tag" />
        </div>
    );
};

export default HomeFilters;
