import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ReviewList from '../subComponents/reviewList.jsx'
import SizeComfortScale from '../subComponents/sizeComfortScale.jsx'
import StarRatings from  '../subComponents/starRatings.jsx';
import Reviews from  '../subComponents/reviews.jsx'

Enzyme.configure({ adapter: new Adapter() });

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
  it('renders without crashing ', () => {
    const wrapper = Enzyme.shallow(<StarRatings />);
    const tester = <div>Star Ratings Here</div>
    expect(wrapper.contains(tester)).toEqual(true);
  });
});

describe('Reviews Inclusion', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(<Reviews />);
    expect(wrapper.contains(tester)).toEqual(true);
  });
});

describe('<ReviewList />', () => {
  it('Should find correct props data', () => {
    const wrapper = Enzyme.shallow(<ReviewList data="data" />);
    expect(wrapper.props().data).to.equal("data");
  });
});