import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './sideTrack.module.scss';

export default class SideTrack extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.node,
    emoji: PropTypes.node,
    position: PropTypes.oneOf(['left', 'right']),
  };

  static defaultProps = {
    title: '',
    paragraph: <div />,
    emoji: (
      <span role="img" aria-label="point down">
        👇🏿
      </span>
    ),
    position: 'left',
  };

  render() {
    const { title, paragraph, emoji, position } = this.props;
    return (
      <div className={`${styles.sideTrackCallOut} ${styles[position]}`}>
        <div className={styles.sideTrackCallOutWrapper}>
          <div className={styles.sideTrackText}>
            <h3 className={styles.sideTrackTitle}>{title}</h3>
            <p>{paragraph}</p>
          </div>
          <div className={styles.emojiWrap}>{emoji}</div>
        </div>
      </div>
    );
  }
}
