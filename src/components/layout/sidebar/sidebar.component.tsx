import UserDefaultAvatar from '../../shared/user-default-avatar/user-default-avatar.component';
import IconButton from '../../ui/icon-button/icon-button.component';
import List from '../../ui/list/list.component';

import classes from './sidebar.styles.module.css';

import { ReactComponent as LogoIcon } from '../../../assets/icons/logo.svg';
import { ReactComponent as HomeIcon } from '../../../assets/icons/home.svg';
import { ReactComponent as GroupIcon } from '../../../assets/icons/group.svg';
import { ReactComponent as CalenderIcon } from '../../../assets/icons/calendar.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/share.svg';
import { ReactComponent as DocIcon } from '../../../assets/icons/doc.svg';
import { ReactComponent as NotebookIcon } from '../../../assets/icons/notebook.svg';
import { ReactComponent as HeartIcon } from '../../../assets/icons/heart.svg';
import { ReactComponent as ChevronRightIcon } from '../../../assets/icons/chevron_right.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/icons/settings.svg';

const TOP_ICONS = [
    { id: 'home', Icon: HomeIcon, active: true },
    { id: 'group', Icon: GroupIcon },
    { id: 'calender', Icon: CalenderIcon },
    { id: 'share', Icon: ShareIcon },
    { id: 'doc', Icon: DocIcon },
    { id: 'notebook', Icon: NotebookIcon },
    { id: 'heart', Icon: HeartIcon },
    { id: 'chevron_right', Icon: ChevronRightIcon },
];

const Sidebar = () => {
    return (
        <aside className={classes['sidebar']}>
            <LogoIcon />

            <List className={classes['top-icons']}>
                {TOP_ICONS.map(({ id, Icon, active }) => {
                    return (
                        <li key={id}>
                            <IconButton className={active ? classes['active'] : ''}>
                                <Icon />
                            </IconButton>
                        </li>
                    );
                })}
            </List>

            <div className={classes['bottom-icons']}>
                <IconButton>
                    <SettingsIcon />
                </IconButton>

                <UserDefaultAvatar label="AS" size={24} />
            </div>
        </aside>
    );
};

export default Sidebar;
