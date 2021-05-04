import React from 'react';
import { connect } from 'react-redux';
import EarthMoon from './EarthMoon';
import MoonMars from './MoonMars';
import './Space.css';

class Space extends React.Component {  
  render () {
    const { reachedMoon, reachedMars } = this.props;
    return (
      <div className="Space">
        {!reachedMoon && <EarthMoon />}
        {reachedMoon  && <MoonMars />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reachedMoon: state.spaceReducer.reachMoon,
  reachedMars: state.spaceReducer.reachMars,
})

export default connect(mapStateToProps)(Space);
