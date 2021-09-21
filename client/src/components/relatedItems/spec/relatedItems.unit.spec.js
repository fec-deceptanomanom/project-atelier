import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CSSLight from '../RelatedItemsLight.module.css';
import sampleData from './sampleData.js';

import AddToOutfit from '../subcomponents/AddToOutfit.jsx';
import ComparisonModal from '../subcomponents/ComparisonModal.jsx';
import LeftButton from '../subcomponents/LeftButton.jsx';
import RightButton from '../subcomponents/RightButton.jsx';
import OutfitCard from '../subcomponents/OutfitCard.jsx';
import OutfitCarousel from '../subcomponents/OutfitCarousel.jsx';
import RelatedCard from '../subcomponents/RelatedCard.jsx';
import RelatedCarousel from '../subcomponents/RelatedCarousel';

Enzyme.configure({ adapter: new Adapter() });

describe('RelatedItems component', function () {
  it('should run without problem', () => {
    expect(1).toEqual(1);
  })
})

describe('Related Carousel', () => {
  it('should find the header Label', () => {
    const wrapper = Enzyme.shallow(<RelatedCarousel items={sampleData}/>);
    const tester = <h3>Carousel</h3>;
    expect(wrapper.contains(tester)).toEqual(true);
  })
})
describe('Related Card', () => {
  it('should find the header Label', () => {
    const wrapper = Enzyme.shallow(<RelatedCard cardInfo={sampleData[0]}/>);
    const tester = <li>Star Rating: ****</li>
    expect(wrapper.contains(tester)).toEqual(true);
  })
})


