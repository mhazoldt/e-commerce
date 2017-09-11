import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="w-75 mx-auto m-4" >
          <div className="card">
            <div className="card-header text-white bg-dark">
                Contact
            </div>
            <div className="card-body">

              <table className="table col-4">
                <tbody>
                  <tr>
                    <th scope="row">Email:</th>
                    <td>email</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone:</th>
                    <td>phone</td>
                  </tr>
                  <tr>
                    <th scope="row">Address:</th>
                    <td>address</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;