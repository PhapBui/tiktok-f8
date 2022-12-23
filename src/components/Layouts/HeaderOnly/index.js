import classNames from 'classnames/bind.js';
import Header from '../components/Header/index.js';
import styles from '../DefaultLayout/DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function HeaderOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
