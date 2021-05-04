import React from 'react';
import { connect } from 'react-redux';
import { reachMoon } from '../redux/actions';
import rocket from '../img/rocket.png'
import moon from '../img/moon.png'
import earth from '../img/earth.png'
import './Space.css';

class EarthMoon extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { launch, toMoon } = this.props;
    launch();
    setTimeout(() => {
      alert('Parabens você chegou a Lua, construa uma base e vamos para Marte! 🚀️');
      toMoon();
    }, 2000);
  }
  
  render () {
    const { launchRocket } = this.props;
    return (
      <div className="earth-moon">
        <button type="button" onClick={ this.handleClick }>Decolar</button>
        <div>      
          <img src={ earth } alt="earth" className="left earth"/>
          <img
            src={ rocket }
            alt="rocket"
            className={ launchRocket ? 'rocket rocket-launch' : 'rocket rocket-base' }
          />
          <img src={ moon } alt="moon" className="rigth moon"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  launchRocket: state.spaceReducer.launchRocket,
})

const mapDispatchToProps = (dispatch) => ({
  toMoon: () => dispatch(reachMoon()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EarthMoon);
