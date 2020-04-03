import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
import styles from './avatar.module.scss';

export default class Avatar extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    text: PropTypes.string.isRequired,
    photo: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    photo: null,
  };

  getInitials(name) {
    const names = name
      .trim()
      .split('(')[0]
      .split(' ');
    return (names.length > 1
      ? `${names[0][0]}${names.slice(-1)[0][0]}`
      : `${names[0][0]}${names[0][1]}`
    ).toUpperCase();
  }

  render() {
    const { photo, text, theme } = this.props;
    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={styles.profileAvatar}>
          {photo && photo.length && photo[0].url ? (
            <img alt={text} src={photo[0].url} />
          ) : (
            <span>{this.getInitials(text)}</span>
          )}
        </div>
      </div>
    );
  }
}
