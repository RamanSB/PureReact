import React from 'react';
import PropTypes from 'prop-types';

function FileName({file}){
  return file.name;
}

FileName.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileName;
