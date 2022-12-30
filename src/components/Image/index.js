import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/images/index.js';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, className, fallback = images.noImage, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={_fallback || src}
            alt={props.alt}
            {...props}
            onError={handleError}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
