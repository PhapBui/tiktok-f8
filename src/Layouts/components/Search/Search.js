import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';

import classNames from 'classnames/bind';

import styles from './Search.module.scss';

import { useEffect, useRef, useState } from 'react';
import AccountItem from '~/components/AccountItem/AccountItem.js';
import { SearchIcon } from '~/components/Icons/Icons.js';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import useDebounce from '~/hooks/useDebounce.js';
import { search } from '~/services/searchService.js';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [showLoading, setShowLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setShowLoading(true);

            const res = await search(debounce, 'less');
            setSearchResult(res);
            setShowLoading(false);
        };
        fetchApi();
    }, [debounce]);
    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleOnChangeInput = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) setSearchValue(e.target.value);
    };
    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };
    return (
        // div fix tippy warning
        <div>
            <TippyHeadless
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult &&
                                searchResult.map((result) => <AccountItem key={result.id} data={result} />)}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        ref={inputRef}
                        value={searchValue}
                        onChange={(e) => handleOnChangeInput(e)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !showLoading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                            {/* Clear */}
                        </button>
                    )}
                    {showLoading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                            {/* Loading */}
                        </button>
                    )}
                    <button className={cx('search-btn')} onMouseDown={handleSearchSubmit}>
                        {/* Search */}

                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
