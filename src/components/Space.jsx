import React from 'react';
import EarthMoon from './EarthMoon';
import './Space.css';

class Space extends React.Component {  
  render () {
    return (
      <div className="Space">
        <EarthMoon />
      </div>
    );
  }
}

export default Space;
