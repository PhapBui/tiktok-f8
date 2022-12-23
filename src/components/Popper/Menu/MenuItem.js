import Button from '~/components/Button/index.js';
import classNames from 'classnames/bind.js';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <Button classNames={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
