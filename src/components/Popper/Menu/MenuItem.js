import PropTypes from 'prop-types';
import Button from '~/components/Button/index.js';
import classNames from 'classnames/bind.js';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button classNames={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
