import React, { Component } from 'react';
import antique from '../data/antique.jpg'

class About extends Component {
  render() {
    return (
      <div>
        <div className="mx-auto w-75 m-3">
          <img src={antique} className="img-thumbnail" alt="" />
        </div>
        <div className="card">
          <div className="card-body">
            This is some text within a card block.
          </div>
        </div>
      </div>
    );
  }
}

export default About;