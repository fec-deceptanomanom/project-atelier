import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ReviewList from '../subComponents/reviewList.jsx'
import SizeComfortScale from '../subComponents/sizeComfortScale.jsx'
import StarRatings from  '../subComponents/starRatings.jsx';
import Reviews from  '../subComponents/reviews.jsx'

Enzyme.configure({ adapter: new Adapter() });

describe("Product Overview", function() {
  it("Should run without issue", function() {
    expect(1).toEqual(1);
  })
});

describe('ReviewList Inclusion', () => {
  it('renders without crashing and contains X element', () => {
    const wrapper = Enzyme.shallow(<ReviewList />);
    const tester = <h4>xyz reviews, sort by relevance</h4>;
    expect(wrapper.contains(tester)).toEqual(true);
  });
});

describe('SizeComfortScale Inclusion', () => {
  it('renders without crashing and contains X element', () => {
    const wrapper = Enzyme.shallow(<SizeComfortScale />);
    const tester = <div>Size Scale</div>;
    expect(wrapper.contains(tester)).toEqual(true);
  });
});

describe('StarRatings Inclusion', () => {
  it('renders without crashing and contains X element', () => {
    const wrapper = Enzyme.shallow(<StarRatings />);
    const tester = <div>Star Ratings Here</div>
    expect(wrapper.contains(tester)).toEqual(true);
  });
});

describe('Reviews Inclusion', () => {
  it('renders without crashing and contains X element', () => {
    const wrapper = Enzyme.shallow(<Reviews />);
    const tester = <div>This is a review.</div>;
    expect(wrapper.contains(tester)).toEqual(true);
  });
});