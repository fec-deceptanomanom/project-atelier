import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CSSLight from '../RelatedItemsLight.module.css';
import carouselSample from './carousel.sample.js';
import relatedItemsSample from './relatedItems.sample.js';
import {reviews, stars} from './relatedCard.sample.js';
import {clickedItem, currentItem} from './comparisonModal.sample.js';

import RelatedItems from '../RelatedItems.jsx'
import AddToOutfit from '../subcomponents/AddToOutfit.jsx';
import ComparisonModal from '../subcomponents/ComparisonModal.jsx';
import LeftButton from '../subcomponents/LeftButton.jsx';
import RightButton from '../subcomponents/RightButton.jsx';
import OutfitCard from '../subcomponents/OutfitCard.jsx';
import OutfitList from '../subcomponents/OutfitList.jsx';
import RelatedCard from '../subcomponents/RelatedCard.jsx';
import RelatedCarousel from '../subcomponents/RelatedCarousel.jsx';

configure({ adapter: new Adapter() });

describe('RelatedItems component', function () {
  it('should run without problem', () => {
    const wrapper = shallow(
      <RelatedItems pageItem={
        {
          product: relatedItemsSample.product,
          styles: relatedItemsSample.styleInfo,
          reviews: relatedItemsSample.reviewInfo
        }
      }
        ids={relatedItemsSample.ids}/>
        )

    expect(1).toEqual(1);
  })

})

describe('Related Carousel', () => {
  it('should find the header Label', () => {
    const wrapper = shallow(<RelatedCarousel items={carouselSample}/>);
    const tester = <h3>Carousel</h3>;
    expect(wrapper.contains(tester)).toEqual(true);
  })
  it('should render', () => {
    const wrapper = shallow(<RelatedCarousel items={carouselSample}/>);
    expect(wrapper.find('#related-carousel').length).toEqual(1);
  });
  it('should render', () => {
    const wrapper = shallow(<RelatedCarousel items={carouselSample} left={true} right={true}/>);
    expect(wrapper.find('#related-carousel').length).toEqual(1);
  });
  it('should render', () => {
    const wrapper = shallow(<RelatedCarousel items={carouselSample} left={true} right={false}/>);
    expect(wrapper.find('#related-carousel').length).toEqual(1);
  });
  it('should render', () => {
    const wrapper = shallow(<RelatedCarousel items={carouselSample} left={false} right={false}/>);
    expect(wrapper.find('#related-carousel').length).toEqual(1);
  });

  // it('should render 4 <Related Card> components', () => {
  //   const wrapper = shallow(<RelatedCarousel items={sampleData}/>);
  //   expect(wrapper.find(<RelatedCard></RelatedCard>)).to.equal(true);
  // })
})

xdescribe('Related Card', () => {
  it('should run fine with proper props', () => {
    const wrapper = shallow(<RelatedCard info={carouselSample[0]} reviews={reviews} stars={stars}/>) ; // />)
    expect(1).toEqual(1);
  })
})

describe('Left Button',() => {
  it('should render', () => {
    const wrapper = shallow(<LeftButton left={true}/>);
    expect(wrapper.find('#left-btn').length).toEqual(1);
  });
  it('should NOT render', () => {
    const wrapper = shallow(<LeftButton left={false}/>);
    expect(wrapper.find('#left-btn').length).toEqual(0);
    });
});

describe('Right Button',() => {
  it('should render', () => {
    const wrapper = shallow(<RightButton right={true}/>);
    expect(wrapper.find('#right-btn').length).toEqual(1);
    });
  it('should NOT render', () => {
    const wrapper = shallow(<RightButton right={false}/>);
    expect(wrapper.find('#right-btn').length).toEqual(0);
    });
});

describe('OutfitList',() => {
  it('should render', () => {
    const wrapper = shallow(<OutfitList />)
    expect(wrapper.find('#outfit-list').length).toEqual(1);
  });
});

describe('OutfitCard',() => {
  it('should render', () => {
    const wrapper = shallow(<OutfitCard />)
    expect(wrapper.find('#outfit-card').length).toEqual(1);
  });
});

describe('AddToOutfit',() => {
  it('should render', () => {
    const wrapper = shallow(<AddToOutfit/>)
    expect(wrapper.find('#add-to-outfit').length).toEqual(1);
  });
});

describe('ComparisonModal', ()=> {
  it('should render', () => {
    const wrapper = shallow(<ComparisonModal clickedItem={clickedItem}
                                             currentItem={currentItem}
                                             stars={stars}/>);
    expect(wrapper.find('table').length).toEqual(1);
  })
})