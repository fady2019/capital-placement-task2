import IconButton from '../../ui/icon-button/icon-button.component';
import List from '../../ui/list/list.component';
import ButtonGroup from '../../ui/button-group/button-group.component';

import classes from './home-header.styles.module.css';

import { ReactComponent as ArtBoardIcon } from '../../../assets/icons/art_board.svg';
import { ReactComponent as UserCloseIcon } from '../../../assets/icons/user_close.svg';
import { ReactComponent as UserCheckIcon } from '../../../assets/icons/user_check.svg';
import { ReactComponent as UserVoiceIcon } from '../../../assets/icons/user_voice.svg';
import { ReactComponent as MailIcon } from '../../../assets/icons/mail.svg';
import { ReactComponent as ChevronDownIcon } from '../../../assets/icons/chevron_down.svg';

const ACTION_ICONS = [
    { id: 'art-board', Icon: ArtBoardIcon },
    { id: 'user-close', Icon: UserCloseIcon, color: '#a80000' },
    { id: 'user-check', Icon: UserCheckIcon },
    { id: 'user-voice', Icon: UserVoiceIcon },
    { id: 'mail', Icon: MailIcon },
];

const HomeHeaderActions = () => {
    return (
        <List className={classes['home-header__actions']}>
            {ACTION_ICONS.map(({ id, Icon, color }) => {
                return (
                    <li key={id}>
                        <IconButton style={{ color: color }}>
                            <Icon />
                        </IconButton>
                    </li>
                );
            })}

            <span className={classes['separator']}></span>

            <li className={classes['interview-btn']}>
                <ButtonGroup>
                    <button>Move To Video Interview I</button>
                    <button>
                        <ChevronDownIcon />
                    </button>
                </ButtonGroup>
            </li>
        </List>
    );
};

export default HomeHeaderActions;
