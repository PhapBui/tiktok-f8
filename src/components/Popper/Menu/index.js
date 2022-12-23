import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind.js';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem.js';
import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem className={cx('menu-item')} key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
