import React from 'react';

function postInteraction(element, component) {
  // This will eventually send a post request to the interactions API with this data
  console.log(`${element} clicked in ${component} component at ${Date.now()}!`);
}

/**
 *
 * @param {*} WrappedComponent
 * @returns a new component class
 */
export const withClickTracker = (WrappedComponent) => {
  class WithClickTracker extends React.Component {
    render() {
      return <WrappedComponent {...this.props} interaction={postInteraction} onClick={() => {console.log('Boo!')}}/>
    }
  }
  return WithClickTracker;
}
