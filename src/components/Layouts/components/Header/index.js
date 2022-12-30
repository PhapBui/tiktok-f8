import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignIn,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/';

import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional

import images from '~/assets/images/index.js';
import styles from './Header.module.scss';

import Button from '~/components/Button/index.js';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons/index.js';
import Image from '~/components/Image/index.js';
import Menu from '~/components/Popper/Menu/index.js';
import Search from '../Search/index.js';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes.js';

const cx = classNames.bind(styles);

function Header() {
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    { type: 'language', code: 'en', title: 'English' },
                    { type: 'language', code: 'vi', title: 'Tieng Viet' },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feelback and help',
            to: '/feelback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    const USER_MENU = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(menuItem);
                break;

            default:
                console.log(1);
        }
    };

    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}

                <Link to={routesConfig.root} className={cx('logo')}>
                    <Image src={images.logo} alt="logo" />
                </Link>

                {/* Search */}
                <Search />

                {/* Accounts- Action */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[200, 300]} content="Upload video">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[200, 300]} content="Check message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[200, 300]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button type="text" disable={true}>
                                Upload
                            </Button>
                            <Button type="primary" leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fcbe6edbe4f59d7ca1dd0346fceb2b0f~c5_100x100.jpeg?x-expires=1671937200&x-signature=e6%2FddTgcHtu%2BrAuHWR6yjGs7zws%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
