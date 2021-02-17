import React from 'react';
import PropTypes from 'prop-types';

const CommitMessage = ({commit}) => commit.message;

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
};

export default CommitMessage;
