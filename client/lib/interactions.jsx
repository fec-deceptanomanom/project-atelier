import React from 'react';

function postInteraction(element, component) {
  // This will eventually send a post request to the interactions API with this data
  console.log(`${element} clicked in ${component} component at ${Date.now()}!`);
}

export const withClickTracker = (WrappedComponent) => {
  class WithClickTracker extends React.Component {
    render() {
      return <WrappedComponent {...this.props} clickTracker={postInteraction}/>
    }
  }
  return WithClickTracker;
}