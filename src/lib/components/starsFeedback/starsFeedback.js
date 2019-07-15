import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './starsFeedback.module.scss';

export default class StarsFeedback extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    handleStarSelected: PropTypes.func,
    starSelected: PropTypes.number.isRequired,
  };

  static defaultProps = {
    className: '',
    // eslint-disable-next-line no-unused-vars
    handleStarSelected: (starSelected) => { },
  }

  getStarStyle = (starSelected, number) => (
    (starSelected > number) ? styles.ratingSelected : ''
  );

  handleStarSelected = (starSelected) => () => {
    this.props.handleStarSelected(starSelected);
  }

  render() {
    const {
      starSelected,
      className,
    } = this.props;

    return (
      <div className={`${styles.rating} ${className}`}>
        <span
          className={this.getStarStyle(starSelected, 4)}
          onClick={this.handleStarSelected(5)}>
          ☆
        </span>
        <span
          className={this.getStarStyle(starSelected, 3)}
          onClick={this.handleStarSelected(4)}>
          ☆
        </span>
        <span
          className={this.getStarStyle(starSelected, 2)}
          onClick={this.handleStarSelected(3)}>
          ☆
        </span>
        <span
          className={this.getStarStyle(starSelected, 1)}
          onClick={this.handleStarSelected(2)}>
          ☆
        </span>
        <span
          className={this.getStarStyle(starSelected, 0)}
          onClick={this.handleStarSelected(1)}>
          ☆
        </span>
      </div>
    );
  }
}
