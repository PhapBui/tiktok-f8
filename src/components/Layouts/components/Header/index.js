import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSignIn,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional

import images from '~/assets/images/index.js';
import styles from './Header.module.scss';

import AccountItem from '~/components/AccountItem/index.js';
import Button from '~/components/Button/index.js';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu/index.js';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
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
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts and videos" spellCheck={false} />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                            {/* Clear */}
                        </button>
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                            {/* Loading */}
                        </button>
                        <button className={cx('search-btn')}>
                            {/* Search */}

                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    <Button type="text" disable={true}>
                        Upload
                    </Button>
                    <Button type="primary" leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Login
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
