import PropTypes from 'prop-types';

export const componentPropTypes = {
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['purple', 'light', 'portal']),
};

export const defaultComponentPropTypes = {
  containerClassName: '',
  className: '',
  theme: 'purple',
};
