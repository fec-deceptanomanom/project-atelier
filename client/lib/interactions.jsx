import React from 'react';
import $ from 'jquery';

export function postInteraction(element, widget) {
  // console.log(`${element} clicked in ${widget} component at ${Date.now()}!`);
  const time = String(Date.now());
  $.post({
    url: 'http://localhost:3000/interactions',
    data: {element, widget, time},
    success: ( (data, status) => {
      console.log('POST INTERACTIONS SUCCESS\n', data);
    }),
  })
}

export const withClickTracker = (WrappedComponent) => {
  class WithClickTracker extends React.Component {
    render() {
      return <WrappedComponent {...this.props} clickTracker={postInteraction} onClick={() => {console.log('This shouldn\'t do anything!')}}/>
    }
  }
  return WithClickTracker;
}
