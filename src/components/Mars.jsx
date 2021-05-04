import React from 'react';
import { connect } from 'react-redux';
import { constructMarsBase } from '../redux/actions';
import mars from '../img/mars.png'
import marsBase from '../img/mars-base.png'
import satelliteImg from '../img/satellite.png'
import './Space.css';

class MoonMars extends React.Component {
  constructor(props) {
    super(props);


    this.constructBase = this.constructBase.bind(this);
    this.buildSatellite = this.buildSatellite.bind(this);
  }


  constructBase() {
    construct();
  }

  buildSatellite() {
    const { base } = this.props;
    if (base < 100) return alert('A base não está pronta.')
  }
  
  render () {
    const { name } = this.state;
    const { base, satellites } = this.props;
    return (
      <div className="base-mars">
          <button
            type="button"
            value="base"
            onClick={ this.constructBase }
            disabled={ base >= 100 }
          >
            Contruir Base
          </button>
          <input type="text" />
          <button type="button" onClick={ this.buildSatellite }>Lançar Satélite</button>
          <div>
            <h2>Base { base  }% construida!</h2>
          </div>
        <div>
          {base < 100 && <img src={ mars } alt="moon" className="mars center" />}
          {base >= 100 && <img src={ marsBase } alt="moon" className="mars center"/>}
          <div className="satellite"> 
            {satellites.map((satellite) => (
              <div key={ Math.random() }>
                <h3>{ satellite }</h3>
                <img src={ satelliteImg } alt="satelite" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  construct: () => dispatch(constructMarsBase()),
})

export default connect(null, mapDispatchToProps)(MoonMars);
