import React from 'react';

import './index.css';
import Garret from '../shared/components/garret';
import Storey from '../shared/components/storey';

class HomePage extends React.Component {
  constructor() {
    super();
    this.tumblerFromStorey = this.tumblerFromStorey.bind(this);
    this.state = {lurked: false}
  }

  tumblerFromStorey(e) {
    this.setState({...e});
  }

  render() {
    const payload = {...this.state};
    const veiled = this.state.lurked;

    return (
      <React.Fragment>
        <Garret
          portray={payload} />
        <p>home-page works!</p>
        <Storey
          disguised={veiled}
          onStoreyToggle={this.tumblerFromStorey} />
      </React.Fragment>
    );
  }
}

export default HomePage;
