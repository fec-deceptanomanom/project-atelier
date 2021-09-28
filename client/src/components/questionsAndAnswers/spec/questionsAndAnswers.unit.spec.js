import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import AnswerEntry from '../subcomponents/AnswerEntry';
import AnswersList from '../subcomponents/AnswersList';
import QuestionEntry from '../subcomponents/QuestionEntry';
import QuestionsList from '../subcomponents/QuestionsList';
import SearchBar from '../subcomponents/SearchBar';
import PhotoZoom from '../subcomponents/PhotoZoom';

import testData from './testData';
import CSSStyle from '../styles/QandALight.module.css';


// initial test just for display purposes
describe("Test suite set up", function() {
  it("proves the test suite is running", function() {
    expect(1).toEqual(1);
  })
});

Enzyme.configure({ adapter: new Adapter() });

// Initial component tests : do the components render correctly?

describe('Answers Entry', () => {
  it('renders without crashing with no photos', () => {
    const wrapper = Enzyme.shallow(<AnswerEntry CSSStyle={CSSStyle} answerData={testData.results[0]["answers"][68]}/>);
    expect(wrapper.find('#answer-entry').length).toEqual(1);
  });
});

describe('Answers List', () => {
  it('renders without crashing with 2 child components', () => {
    const wrapper = Enzyme.shallow(<AnswersList CSSStyle={CSSStyle} answerList={testData.results[1]["answers"]} />);
    expect(wrapper.find('#answers-list').length).toEqual(1);
  });
  it('renders without crashing with 1 child component', () => {
    const wrapper = Enzyme.shallow(<AnswersList CSSStyle={CSSStyle} answerList={testData.results[0]["answers"]} />);
    expect(wrapper.find('#answers-list').length).toEqual(1);
  });
  it('renders without crashing with 0 child components', () => {
    const wrapper = Enzyme.shallow(<AnswersList CSSStyle={CSSStyle} answerList={[]} />);
    expect(wrapper.find('#answers-list').length).toEqual(1);
  });
  // it('renders without crashing with 2 child component even with more than 2 answers', () => {
  //   const wrapper = Enzyme.shallow(<AnswersList CSSStyle={CSSStyle} answerList={testData.results[2]["answers"]} />);
  //   expect(wrapper.find('#answers-list').length).toEqual(1);
  // });
});

describe('Photo Zoom', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(<PhotoZoom photo={testData.results[0]["answers"][68]['photos'][0]} CSSStyle={CSSStyle} onClick={() => {return false}}/>);
    expect(wrapper.find('#zoomed-in-answer-photo').length).toEqual(1);
  })
})

describe('Question Entry', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(<QuestionEntry key={0} CSSStyle={CSSStyle} questionData={testData.results[0]} openAnswerForm={() => {return false}}/>);
    const element = <h3 id="question-37">Q: Why is this product cheaper here than other sites?</h3>
    expect(wrapper.contains(element)).toEqual(true);
  });
});

describe('Questions List', () => {
  it('renders without crashing with 2 child components', () => {
    const wrapper = Enzyme.shallow(<QuestionsList CSSStyle={CSSStyle} openAnswerForm={() => {return false}} questionData={{"product_id": "5",
    "results": [testData.results[0], testData.results[1]]}} />);
    expect(wrapper.find('#questions-list').length).toEqual(1);
  });
  it('renders without crashing with 1 child component', () => {
    const wrapper = Enzyme.shallow(<QuestionsList CSSStyle={CSSStyle}  openAnswerForm={() => {return false}} questionData={{"product_id": "5",
    "results": [testData.results[0]]}} />);
    expect(wrapper.find('#questions-list').length).toEqual(1);
  });
  it('renders without crashing with 0 child components', () => {
    const wrapper = Enzyme.shallow(<QuestionsList CSSStyle={CSSStyle} openAnswerForm={() => {return false}} questionData={{"product_id": "5",
    "results": []}} />);
    expect(wrapper.find('#questions-list').length).toEqual(1);
  });
  it('renders without crashing with 2 child component even with more than 2 questions', () => {
    const wrapper = Enzyme.shallow(<QuestionsList CSSStyle={CSSStyle} openAnswerForm={() => {return false}} questionData={{"product_id": "5",
    "results": [testData.results[0], testData.results[1], testData.results[2]]}} />);
    expect(wrapper.find('#questions-list').length).toEqual(1);
  });
});

describe('Search Bar', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(<SearchBar CSSStyle={CSSStyle} />);
    expect(wrapper.find('#search-bar').length).toEqual(1);
    expect(wrapper.find('#search-form').length).toEqual(1);
  });
});
