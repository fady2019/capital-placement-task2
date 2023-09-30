import CandidateList from './candidate-list/candidate-list.component';
import HomeFilters from './home-filters/home-filters.component';
import HomeHeader from './home-header/home-header.component';

import classes from './home.styles.module.css';

const Home = () => {
    return (
        <div className={classes['home']}>
            <HomeHeader />
            <HomeFilters />
            <CandidateList />
        </div>
    );
};

export default Home;
