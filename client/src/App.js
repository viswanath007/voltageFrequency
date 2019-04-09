import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import './App.css'
import TopBar from './components/TopBar';
import BarGraph from './components/BarGraph';

import {getVoltageValues} from './store/actions/voltage';


class App extends Component {
  componentDidMount(){
    this.props.getVoltageValues(); 
  }

  render () {
    return(<div className="App">
      <Fragment>
        <TopBar />
        <BarGraph data={this.props.voltageValues} />
      </Fragment>
      </div>);    
  }
}

const mapStateToProps = (state) => {
  return {
    voltageValues: state.power,
  };
}

const dispatchToProps = (dispatch) => ({
  getVoltageValues: (data) => dispatch(getVoltageValues(data)),
})

export default connect(mapStateToProps, dispatchToProps)(App);

