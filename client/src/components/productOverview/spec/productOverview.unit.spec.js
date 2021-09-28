import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ProductOverview from '../ProductOverview.jsx';
import AddToBagButton from '../subcomponents/AddToBagButton.jsx';
import ProductDescription from '../subcomponents/ProductDescription.jsx';
import ProductFeatures from '../subcomponents/ProductFeatures.jsx';
import ProductImage from '../subcomponents/ProductImage.jsx';
import ProductInfo from '../subcomponents/ProductInfo.jsx';
import ProductSelections from '../subcomponents/ProductSelections.jsx';
import QuantitySelection from '../subcomponents/QuantitySelection.jsx';
import SizeSelection from '../subcomponents/SizeSelection.jsx';
import StyleThumbnailGrid from '../subcomponents/StyleThumbnailGrid.jsx';
import StyleThumbnail from '../subcomponents/StyleThumbnail.jsx';

import sampleData from './sampleData.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Product Overview', () => {
  let data = {
    product: sampleData.productInfo,
    styles: sampleData.styleInfo,
    reviews: sampleData.reviewInfo
  };
  it('renders without crashing and contains its elements when given valid data', () => {
    // Getting the 'unwrapped' component from the Higher Order Component
    const wrapper = Enzyme.shallow(<ProductOverview data={data} />).find('ProductOverview').shallow();
    expect(wrapper.find(ProductImage).length).toEqual(1);
    expect(wrapper.find(ProductInfo).length).toEqual(1);
    expect(wrapper.find(ProductDescription).length).toEqual(1);
    expect(wrapper.find(ProductFeatures).length).toEqual(1);
  });
});

describe('Product Description', () => {
  it('renders without crashing and contains its elements', () => {
    const wrapper = Enzyme.shallow(<ProductDescription info={{product: {
      slogan: "I'm a slogan!",
      description: "I'm a description!"
    }}} />);
    const element = <h2>I'm a slogan!</h2>;
    expect(wrapper.contains(element)).toEqual(true);

    const element2 = <p>I'm a description!</p>;
    expect(wrapper.contains(element2)).toEqual(true);
  });
});

describe('Product Features', () => {
  it('renders without crashing and contains its elements', () => {
    const wrapper = Enzyme.shallow(<ProductFeatures info={{product: {
      features: [
        {
          feature: "Calcium",
          value: "Good for your bones!"
        },
        {
          feature: "Oxygen",
          value: "Helps you live!"
        }
      ]
    }}} />);

    const element = (
      <ul>
        <li>Calcium: Good for your bones!</li>
        <li>Oxygen: Helps you live!</li>
      </ul>
    );
    expect(wrapper.contains(element)).toEqual(true);
  });

  it('should render "Loading..." if no info is present', () => {
    const wrapper = Enzyme.shallow(<ProductFeatures info={{product: {}}} />);
    const element = <h1>Loading...</h1>;
    expect(wrapper.contains(element)).toEqual(true);
  });
});

describe('Product Image', () => {
  it('renders without crashing and contains its elements', () => {
    const props = {
      photos: [
        { url: "www.sampleurl.wut" }
      ]
    };
    const wrapper = Enzyme.shallow(<ProductImage currentStyle={props}/>);
    const element = <img src={"www.sampleurl.wut"} alt={"404"}/>;
    expect(wrapper.contains(element)).toEqual(true);
  });

  it('should render "Image not found" if no photos are present', () => {
    const props = {
      photos: []
    };
    const wrapper = Enzyme.shallow(<ProductImage currentStyle={props}/>);
    const element = <p>Image not found</p>;
    expect(wrapper.contains(element)).toEqual(true);
  });

  it('should render "Loading..." if the props aren\'t set', () => {
    const props = null;
    const wrapper = Enzyme.shallow(<ProductImage currentStyle={props}/>);
    const element = <h1>Loading...</h1>;
    expect(wrapper.contains(element)).toEqual(true);
  });
});

describe('Product Info', () => {
  let info = {
    product: sampleData.productInfo,
    styles: sampleData.styleInfo,
    reviews: sampleData.reviewInfo
  };
  let currentStyle = sampleData.styleInfo.results[0];
  let onStyleClick = () => {};

  it('renders each element when valid data is provided', () => {
    const wrapper = Enzyme.shallow(<ProductInfo info={info} currentStyle={currentStyle} onStyleClick={onStyleClick} />);

    expect(wrapper.find('#productinfo-star-rating').length).toEqual(1);
    expect(wrapper.find('#productinfo-star-rating').text()).toEqual("Stars: 3.75");

    expect(wrapper.find('#productinfo-category').length).toEqual(1);
    expect(wrapper.find('#productinfo-category').text()).toEqual("Jackets");

    expect(wrapper.find('#productinfo-name').length).toEqual(1);
    expect(wrapper.find('#productinfo-name').text()).toEqual("Camo Onesie");

    expect(wrapper.find('#productinfo-price').length).toEqual(1);
    expect(wrapper.find('#productinfo-price').text()).toEqual("$140.00");

    expect(wrapper.find(StyleThumbnailGrid).length).toEqual(1);
  });
});

describe('Style Thumbnail Grid', () => {
  let info = {
    product: sampleData.productInfo,
    styles: sampleData.styleInfo,
    reviews: sampleData.reviewInfo
  };
  let currentStyle = sampleData.styleInfo.results[0];
  let onStyleClick = () => {};

  it('renders all style thumbnails', () => {
    const wrapper = Enzyme.shallow(<StyleThumbnailGrid styles={info.styles} onStyleClick={onStyleClick}/>);
    expect(wrapper.find(StyleThumbnail).length).toEqual(6);
  });
});

describe('Style Thumbnail', () => {
  let info = {
    product: sampleData.productInfo,
    styles: sampleData.styleInfo,
    reviews: sampleData.reviewInfo
  };
  let currentStyle = sampleData.styleInfo.results[0];
  let onStyleClick = () => {};

  it('renders a button', () => {
    const wrapper = Enzyme.shallow(<StyleThumbnail style={info.styles.results[0]} onStyleClick={onStyleClick}/>);
    expect(wrapper.find('button').length).toEqual(1);
  });
  it('contains the correct text', () => {
    const wrapper = Enzyme.shallow(<StyleThumbnail style={info.styles.results[0]} onStyleClick={onStyleClick}/>);
    expect(wrapper.find('button').text()).toEqual("Forest Green & Black");
  });
});