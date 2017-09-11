import React, { Component } from 'react';
import Items from './Items.js'


class Jewellery extends Component {
  render() {
    
    return (
      <div>
        <div className="w-75 mx-auto">
          
          <h1 className="m-2">Jewellery</h1>
          <Items itemType='jewellery' />

        </div>
      </div>
    );
  }
}

export default Jewellery;