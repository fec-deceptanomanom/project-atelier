import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ReviewList from '../subComponents/reviewList.jsx'

Enzyme.configure({ adapter: new Adapter() });

describe("Product Overview", function() {
  it("Should run without issue", function() {
    expect(1).toEqual(1);
  })
});

describe('ReviewList', () => {
  it('renders without crashing and contains X element', () => {
    const wrapper = Enzyme.shallow(<ReviewList />);
    const tester = <h4>xyz reviews, sort by relevance</h4>;
    expect(wrapper.contains(tester)).toEqual(true);
  });
});