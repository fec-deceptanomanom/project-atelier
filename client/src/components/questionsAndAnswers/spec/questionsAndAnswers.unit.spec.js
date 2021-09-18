import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import AnswerEntry from '../subcomponents/AnswerEntry';
import AnswersList from '../subcomponents/AnswersList';
import QuestionEntry from '../subcomponents/QuestionEntry';
import QuestionsList from '../subcomponents/QuestionsList';
import SearchBar from '../subcomponents/SearchBar';

import testData from './testData';
import CSSStyle from '../styles/QandALight.module.css';

// initial test just for display purposes
describe("Test suite set up", function() {
  it("proves the test suite is running", function() {
    expect(1).toEqual(1);
  })
});

Enzyme.configure({ adapter: new Adapter() });


// Initial component tests

describe('Answers Entry', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(<AnswerEntry CSSStyle={CSSStyle} answerData={testData.results[0]["answers"][68]}/>);
    const element = <h3>A: </h3>
    expect(wrapper.contains(element)).toEqual(true);
  });
});

describe('Question Entry', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(<QuestionEntry key={0} CSSStyle={CSSStyle} questionData={testData.results[0]} openAnswerForm={() => {return false}}/>);
    const element = <h3 id="question-37">Q: Why is this product cheaper here than other sites?</h3>
    expect(wrapper.contains(element)).toEqual(true);
  });
});

describe('SearchBar', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(<SearchBar CSSStyle={CSSStyle} />);
    const element = <button type="submit" className={CSSStyle.searchButton}><i className="fas fa-search"></i></button>
    expect(wrapper.contains(element)).toEqual(true);
  });
});