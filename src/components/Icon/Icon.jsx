import React from 'react';
// import PropTypes from 'prop-types';
import * as Icons from '../../assets/icons';

const Icon = ({ icon, ...rest }) => {
  const Svg = Icons[icon];

  return <Svg {...rest} />;
};

// Icon.propTypes = {
//   icon: PropTypes.string.isRequired,
// };

export default Icon;
