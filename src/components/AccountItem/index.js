import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind.js';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ children }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <img
                    className={cx('avartar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fcbe6edbe4f59d7ca1dd0346fceb2b0f~c5_100x100.jpeg?x-expires=1671937200&x-signature=e6%2FddTgcHtu%2BrAuHWR6yjGs7zws%3D"
                    alt="avatar"
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Nguyen Van A</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}>nguyenvana</span>
                </div>
            </div>
        </>
    );
}

export default AccountItem;
