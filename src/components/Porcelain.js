import React, { Component } from 'react';
import Items from './Items.js'


class Porcelain extends Component {
  render() {
    
    return (
      <div>
        <div className="w-75 mx-auto">
          
          <h1 className="m-2">Porcelain</h1>
          <Items itemType='porcelain' />

        </div>
      </div>
    );
  }
}

export default Porcelain;