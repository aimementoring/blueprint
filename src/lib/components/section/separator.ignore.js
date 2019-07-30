import React from 'react';

const Separator = ({ color, width, style }) => (
  <div style={{ borderBottom: `${width}px ${style} ${color}` }} />
);

Separator.defaultProps = {
  width: 1,
  style: 'solid',
  color: 'blue',
};

export default Separator;
