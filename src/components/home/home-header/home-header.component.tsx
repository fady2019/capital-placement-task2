import HomeHeaderActions from './home-header-actions.component';
import HomeHeaderMenu from './home-header-menu.component';

import classes from './home-header.styles.module.css';

const HomeHeader = () => {
    return (
        <header className={classes['home-header']}>
            <div className={classes['home-header__left']}>
                <h1 className={classes['title']}>London Internship Program</h1>
                <p className={classes['city']}>London</p>
            </div>

            <div className={classes['home-header__right']}>
                <HomeHeaderMenu />
                <HomeHeaderActions />
            </div>
        </header>
    );
};

export default HomeHeader;
