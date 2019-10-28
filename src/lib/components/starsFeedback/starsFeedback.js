import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './starsFeedback.module.scss';

const Star = ({ onSelect, star, starSelected }) => (
  <span
    className={classNames(styles.star, { [styles.starSelected]: star <= starSelected })}
    onClick={() => onSelect(star)}
    key={star}
  >
    ☆
  </span>
);

export default class StarsFeedback extends PureComponent {
  handleStarSelected = starSelected => {
    this.props.handleStarSelected(starSelected);
  };

  render() {
    const { starSelected, className, theme, stars } = this.props;
    const starsList = [...Array(stars).keys()].reverse();

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={`${styles.rating} ${className}`}>
          {starsList.map(star => (
            <Star
              onSelect={this.handleStarSelected}
              star={star + 1}
              starSelected={starSelected}
              key={star}
            />
          ))}
        </div>
      </div>
    );
  }
}

StarsFeedback.propTypes = {
  ...componentPropTypes,
  handleStarSelected: PropTypes.func,
  starSelected: PropTypes.number.isRequired,
  stars: PropTypes.number,
};

StarsFeedback.defaultProps = {
  ...defaultComponentPropTypes,
  // eslint-disable-next-line no-unused-vars
  handleStarSelected: starSelected => {},
  stars: 5,
};
