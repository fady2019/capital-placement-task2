import CandidateList from './candidate-list/candidate-list.component';
import HomeHeader from './home-header/home-header.component';

import classes from './home.styles.module.css';

const Home = () => {
    return (
        <div className={classes['home']}>
            <HomeHeader />
            <div style={{ gridArea: 'filters' }}>Filters</div>
            <CandidateList />
        </div>
    );
};

export default Home;
