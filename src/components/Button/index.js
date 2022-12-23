import classNames from 'classnames/bind.js';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    onClick,
    children,
    type,
    size,
    disable = false,
    leftIcon,
    rightIcon,
    classNames,
    ...pathProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        to,
        ...pathProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // Remove event Listener when button disbale
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
        delete props.onClick;
    }
    const classes = cx('wrapper', { [type]: type, [size]: size, [disable]: disable, [classNames]: classNames });

    return (
        <>
            <Comp className={[classes]} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        </>
    );
}

export default Button;
