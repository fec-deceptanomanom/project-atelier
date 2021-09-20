import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ReviewsList from '../subComponents/reviewList.jsx'
import SizeComfortScale from '../subComponents/sizeComfortScale.jsx'
import StarRatings from  '../subComponents/starRatings.jsx';
import Review from  '../subComponents/reviews.jsx'
import RatingsAndReviews from '../RatingsAndReviews.jsx'

import sampleData from './sampleData.js';

Enzyme.configure({ adapter: new Adapter() });

describe('RatingsAndReviews', () => {
  it('renders without crashing and contains subcomponents', () => {
    const wrapper = Enzyme.shallow(<RatingsAndReviews reviewList={sampleData.reviews} reviewsInfo={sampleData.reviewInfo}/>);
    expect(wrapper.find(StarRatings).length).toEqual(1);
    expect(wrapper.find(SizeComfortScale).length).toEqual(1);
    expect(wrapper.find(ReviewsList).length).toEqual(1);
  });
});

describe('StarRatings', () => {
  it('renders without crashing and contains subcomponents', () => {
    const wrapper = Enzyme.shallow(<StarRatings data={sampleData.reviewInfo.ratings}/>);

    expect(wrapper.find('#starRatings-average').length).toEqual(1);
    expect(wrapper.find('#starRatings-average').text()).toEqual('3.7 stars');

    expect(wrapper.find('#starRatings-bars').length).toEqual(1);
    expect(wrapper.find('#starRatings-bars').text()).toEqual('Rating bars here'); // Hard coded for now!
  });
});

describe('SizeComfortScale', () => {
  it('renders without crashing and contains subcomponents', () => {
    const wrapper = Enzyme.shallow(<SizeComfortScale />);

    expect(wrapper.find('#sizeComfortScale-size').length).toEqual(1);
    expect(wrapper.find('#sizeComfortScale-comfort').length).toEqual(1);
  });
});

describe('ReviewsList', () => {
  it('renders without crashing and contains subcomponents', () => {
    const wrapper = Enzyme.shallow(<ReviewsList data={sampleData.reviews}/>);

    expect(wrapper.find('#reviewslist-count').length).toEqual(1);
    expect(wrapper.find('#reviewslist-count').text()).toEqual('5 reviews');

    expect(wrapper.find(Review).length).toEqual(5);
  });
});

describe('Review', () => {
  it('renders without crashing and contains subcomponents', () => {
    const wrapper = Enzyme.shallow(<Review review={sampleData.reviews.results[0]}/>);

    expect(wrapper.find('#review-rating').length).toEqual(1);
    expect(wrapper.find('#review-rating').text()).toEqual('4');

    expect(wrapper.find('#review-username').length).toEqual(1);
    expect(wrapper.find('#review-username').text()).toEqual('mymainstreammother');

    expect(wrapper.find('#review-date').length).toEqual(1);
    expect(wrapper.find('#review-date').text()).toEqual('2019-01-11T00:00:00.000Z');

    expect(wrapper.find('#review-summary').length).toEqual(1);
    expect(wrapper.find('#review-summary').text()).toEqual('This product was ok!');

    expect(wrapper.find('#review-body').length).toEqual(1);
    expect(wrapper.find('#review-body').text()).toEqual('I really did not like this product solely because I am tiny and do not fit into it.');

    expect(wrapper.find('#review-helpfulness').length).toEqual(1);
    expect(wrapper.find('#review-helpfulness').text()).toEqual('Helpful? 14');
  });
});