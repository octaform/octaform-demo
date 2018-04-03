import React, { Component } from 'react';

export default class Errors extends Component {
  uniqueKey(){
    return Math.random().toString(36).substring(2, 15)
  }

  render() {
    const { errors } = this.props;

    return (
      <ul className="errors">
        {errors.map(item => {
          return (
            item.messages.map((message) => {
              return (
                <li key={this.uniqueKey()}>
                  <strong>Error:</strong>
                  <i className='field'>
                    {
                      item.field
                        .split(/(?![a-z])(?=[A-Z])/g)
                        .join('-')
                        .toLowerCase()
                    }
                  </i>
                  <span>{message}</span>
                </li>
              )
            })
          )
        })}
      </ul>
    );
  }
}
