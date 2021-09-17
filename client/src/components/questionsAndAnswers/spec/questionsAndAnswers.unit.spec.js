import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import QuestionsAndAnswers from '../QuestionsAndAnswers';
import SearchBar from '../subcomponents/SearchBar';

// initial test just for display purposes
describe("Test suite set up", function() {
  it("proves the test suite is running", function() {
    expect(1).toEqual(1);
  })
});

Enzyme.configure({ adapter: new Adapter() });


// Initial component tests

describe('Main COmponent Renders', () => {
  it('renders without crashing and contains X element', () => {
    const wrapper = Enzyme.render(<QuestionsAndAnswers />);
    expect(wrapper.find('.QuestionsAndAnswers')).to.have.lengthOf(1);
  });
});
