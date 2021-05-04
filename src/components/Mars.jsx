import React from 'react';
import { connect } from 'react-redux';
import { constructMarsBase, constructSatellite } from '../redux/actions';
import mars from '../img/mars.png'
import marsBase from '../img/mars-base.png'
import satelliteImg from '../img/satellite.png'
import './Space.css';

class MoonMars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    }

    this.constructBase = this.constructBase.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.buildSatellite = this.buildSatellite.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ name: value });
  }

  constructBase({ target: { value } }) {
    const { construct } = this.props;
    if (value === 'base') construct();
  }

  buildSatellite() {
    const { name } = this.state;
    const { makeSatellite, base } = this.props;
    if (base < 100) return alert('A base não está pronta.')
    if (name !== '') {
      this.setState({ name: '' });
      makeSatellite(name);
    } else alert('Satélite sem nome.')
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
          <input type="text" value={ name } onChange={ this.handleChange }/>
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

const mapStateToProps = (state) => ({
  base: state.marsReducer.base,
  satellites: state.marsReducer.satellites,
})

const mapDispatchToProps = (dispatch) => ({
  construct: () => dispatch(constructMarsBase()),
  makeSatellite: (name) => dispatch(constructSatellite(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoonMars);
