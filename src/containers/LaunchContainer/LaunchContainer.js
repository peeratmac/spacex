import React from 'react';
import { connect } from 'react-redux';

export const LaunchContainer = () => {
  return (
    <div>
      <h1>LaunchContainer</h1>
    </div>
  );
};

export default connect(null, null)(LaunchContainer);
