import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './sideTrack.module.scss';

export default class SideTrack extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    title: PropTypes.string,
    paragraph: PropTypes.node,
    emoji: PropTypes.node,
    emojiPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    position: PropTypes.oneOf(['left', 'right']),
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    title: '',
    paragraph: <div />,
    emoji: (
      <span role="img" aria-label="point down">
        👇🏿
      </span>
    ),
    emojiPosition: 'left',
    position: 'left',
  };

  render() {
    const {
      title,
      paragraph,
      emoji,
      position,
      emojiPosition,
      className,
      containerClassName,
      theme } = this.props;
    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={containerClassName}>
          <div className={`${styles.sideTrackCallOut} ${styles[position]} ${className}`}>
            <div className={styles.sideTrackCallOutWrapper}>
              <div className={styles.sideTrackText}>
                <h3 className={styles.sideTrackTitle}>{title}</h3>
                <p>{paragraph}</p>
              </div>
              <div className={`${styles.emojiWrap} ${styles[emojiPosition]}`}>{emoji}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
