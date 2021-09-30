import React from 'react';
import $ from 'jquery';
import { URL_BASE } from '../../.secret.json'

export function postInteraction(element, widget) {
  // console.log(`${element} clicked in ${widget} component at ${Date.now()}!`);
  const time = String(Date.now());
  $.post({
    url: `${URL_BASE}/interactions`,
    data: {element, widget, time},
    success: ( (data, status) => {
      //console.log('POST INTERACTIONS SUCCESS\n', data);
    }),
  })
}

export const withClickTracker = (WrappedComponent) => {
  class WithClickTracker extends React.Component {
    render() {
      return <WrappedComponent {...this.props} clickTracker={postInteraction}/>
    }
  }
  return WithClickTracker;
}