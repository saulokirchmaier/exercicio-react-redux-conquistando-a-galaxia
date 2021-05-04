import React from 'react';
import { connect } from 'react-redux';
import { launchRocket, setRocketToBase, constructBase, reachMars } from '../redux/actions';
import rocket from '../img/rocket.png';
import moon from '../img/moon.png';
import lunarBase from '../img/lunar-base.png';
import mars from '../img/mars.png';
import './Space.css';

class MoonMars extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setToBase } = this.props;
    setToBase();
  }

  handleClick({ target: { value } }) {
    const { launch, moonBase, construct, toMars } = this.props;
    if (value === 'base') construct();
    else if (value === 'launch' && moonBase < 100) alert('Construa a base Lunar antes de partir para marte!')
    else if (value === 'launch' && moonBase >= 100) {
      launch();
      setTimeout(() => {
        alert('Parabens você chegou a Marte, construa a base operacional e proteja o planeta de invasões! 🚀️');
        toMars();
      }, 2000);
    }
  }
  
  render () {
    const { launchRocket, moonBase } = this.props;
    return (
      <div className="moon-mars">
        <button
          type="button"
          value="base"
          onClick={ this.handleClick }
          disabled={ moonBase >= 100 }
        >
          Construir Base
        </button>
        <button type="button" value="launch" onClick={ this.handleClick }>Decolar</button>
        <div>
          <h2>Base { moonBase }% construida!</h2>
        </div>
        <div>
          {moonBase < 100 && <img src={ moon } alt="moon" className="left moon" />}
          {moonBase >= 100 && <img src={ lunarBase } alt="moon" className="left moon"/>}
          <img
            src={ rocket }
            alt="rocket"
            className={ launchRocket ? 'rocket rocket-launch' : 'rocket rocket-base' }
          />
          <img src={ mars } alt="mars" className="rigth mars"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  launchRocket: state.spaceReducer.launchRocket,
  moonBase: state.spaceReducer.moonBase,
})

const mapDispatchToProps = (dispatch) => ({
  launch: () => dispatch(launchRocket()),
  setToBase: () => dispatch(setRocketToBase()),
  construct: () => dispatch(constructBase()),
  toMars: () => dispatch(reachMars()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MoonMars);
