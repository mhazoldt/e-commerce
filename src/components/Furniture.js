import React, { Component } from 'react';
import Items from './Items.js'


class Furniture extends Component {
  render() {
    
    return (
      <div>
        <div className="w-75 mx-auto">
          
          <h1 className="m-2">Furniture</h1>
          <Items itemType='furniture' />

        </div>
      </div>
    );
  }
}

export default Furniture;