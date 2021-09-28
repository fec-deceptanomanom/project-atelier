import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ProductOverview from '../ProductOverview.jsx';
import AddToBagButton from '../subcomponents/AddToBagButton.jsx';
import ProductDescription from '../subcomponents/ProductDescription.jsx';
import ProductFeatures from '../subcomponents/ProductFeatures.jsx';
import ProductImage from '../subcomponents/ProductImage.jsx';
import ProductInfo, {ProductPrice} from '../subcomponents/ProductInfo.jsx';
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

describe('Add To Bag Button', () => {
  it('renders without crashing and contains its elements when given valid data', () => {
    let data = {
      outOfStock: false
    };
    const wrapper = Enzyme.shallow(<AddToBagButton data={data} />);
    expect(wrapper.find('#add-to-bag-button').length).toEqual(1);
    expect(wrapper.find('#add-to-bag-button').text()).toEqual("Add To Bag");
    expect(wrapper.find('#add-to-bag-button').props().onClick).toBeTruthy();
  });
  // it('is disabled if outOfStock is true', () => {
  //   let data = {
  //     outOfStock: true
  //   };
  //   const wrapper = Enzyme.shallow(<AddToBagButton data={data} />);
  //   expect(wrapper.find('#add-to-bag-button').length).toEqual(1);
  //   expect(wrapper.find('#add-to-bag-button').text()).toEqual("Add To Bag");
  //   // expect(wrapper.contains(<button id={'add-to-bag-button'} disabled={true}>Add To Bag</button>)).toEqual(true);
  // });
});

describe('Product Description', () => {
  it('renders without crashing and contains its elements', () => {
    const wrapper = Enzyme.shallow(<ProductDescription info={{product: {
      slogan: "I'm a slogan!",
      description: "I'm a description!"
    }}} />);
    let slogan = wrapper.find("#product-overview-description-slogan");
    expect(slogan.length).toEqual(1);
    expect(slogan.text()).toEqual("I'm a slogan!");

    let text = wrapper.find("#product-overview-description-text");
    expect(text.length).toEqual(1);
    expect(text.text()).toEqual("I'm a description!");
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
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(2);

    expect(wrapper.find('li').at(0).text()).toEqual("Calcium: Good for your bones!");
    expect(wrapper.find('li').at(1).text()).toEqual("Oxygen: Helps you live!");
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
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should set the url as the src property and "404" as the alt', () => {
    const props = {
      photos: [
        { url: "www.sampleurl.wut" }
      ]
    };
    const wrapper = Enzyme.shallow(<ProductImage currentStyle={props}/>);
    expect(wrapper.find('img').prop("src")).toEqual("www.sampleurl.wut");
    expect(wrapper.find('img').prop("alt")).toEqual("404");
  });

  it('should render "Image not found" if no photos are present', () => {
    const props = {
      photos: []
    };
    const wrapper = Enzyme.shallow(<ProductImage currentStyle={props}/>);
    const element = wrapper.find('p');
    expect(element.length).toEqual(1);
    expect(element.text()).toEqual("Image not found");
  });

  it('should render "Loading..." if the props aren\'t set', () => {
    const props = null;
    const wrapper = Enzyme.shallow(<ProductImage currentStyle={props}/>);
    const element = wrapper.find('h1');
    expect(element.length).toEqual(1);
    expect(element.text()).toEqual("Loading...");
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

    expect(wrapper.find('ProductPrice').length).toEqual(1);

    const productPrice = Enzyme.shallow(<ProductPrice currentStyle={currentStyle}/>);
    expect(productPrice.find('#productinfo-price').length).toEqual(1);
    expect(productPrice.find('#productinfo-price').text()).toEqual("$140.00");

    expect(wrapper.find(StyleThumbnailGrid).length).toEqual(1);
  });
});

describe('Product Selections', () => {
  let currentStyle = sampleData.styleInfo.results[0];

  it('renders each element when valid data is provided', () => {
    const wrapper = Enzyme.shallow(<ProductSelections currentStyle={currentStyle}/>);

    expect(wrapper.find('#product-selections-dropdowns SizeSelection').length).toEqual(1);
    expect(wrapper.find('#product-selections-dropdowns QuantitySelection').length).toEqual(1);
    expect(wrapper.find('#product-selections-buttons AddToBagButton').length).toEqual(1);
    expect(wrapper.find('#product-selections-buttons #star-button').length).toEqual(1);
  });
});

describe('Quantity Selection', () => {
  let currentStyle = sampleData.styleInfo.results[0];

  it('renders each element when valid data is provided', () => {
    const wrapper = Enzyme.shallow(<QuantitySelection currentStyle={currentStyle} sizeSelected={true} currentSize={'XS'}/>);

    expect(wrapper.find('#product-quantity-selection').length).toEqual(1);
    expect(wrapper.find('#product-quantity-selection option').length).toEqual(8);
    for(let k = 0; k < 8; k++) {
      expect(wrapper.find('#product-quantity-selection option').at(k).text()).toEqual(`${k + 1}`);
    }
  });
  it('renders only up to a quantity of 15', () => {
    const wrapper = Enzyme.shallow(<QuantitySelection currentStyle={currentStyle} sizeSelected={true} currentSize={'M'}/>);

    expect(wrapper.find('#product-quantity-selection').length).toEqual(1);
    expect(wrapper.find('#product-quantity-selection option').length).toEqual(15);
    for(let k = 0; k < 15; k++) {
      expect(wrapper.find('#product-quantity-selection option').at(k).text()).toEqual(`${k + 1}`);
    }
  });
  it('renders only a hyphen if no size is selected', () => {
    const wrapper = Enzyme.shallow(<QuantitySelection currentStyle={currentStyle} sizeSelected={false} currentSize={null}/>);

    expect(wrapper.find('#product-quantity-selection').length).toEqual(1);
    expect(wrapper.find('#product-quantity-selection option').length).toEqual(1);
    expect(wrapper.find('#product-quantity-selection option').at(0).text()).toEqual("-");
  });
  it('renders only a hyphen if a size is selected but the currentSize is null', () => {
    const wrapper = Enzyme.shallow(<QuantitySelection currentStyle={currentStyle} sizeSelected={true} currentSize={null}/>);

    expect(wrapper.find('#product-quantity-selection').length).toEqual(1);
    expect(wrapper.find('#product-quantity-selection option').length).toEqual(1);
    expect(wrapper.find('#product-quantity-selection option').at(0).text()).toEqual("-");
  });
});

describe('Size Selection', () => {
  let currentStyle = sampleData.styleInfo.results[1];
  let onSelect = () => {};

  it('renders each element when valid data is provided', () => {
    const wrapper = Enzyme.shallow(<SizeSelection
      currentStyle={currentStyle}
      outOfStock={false}
      onSelect={onSelect}
    />);
    expect(wrapper.find('#product-size-selection').length).toEqual(1);
    expect(wrapper.find('#product-size-selection option').length).toEqual(7);
    expect(wrapper.find('#product-size-selection option').at(0).text()).toEqual("Select size");
    expect(wrapper.find('#product-size-selection option').at(1).text()).toEqual("XS");
    expect(wrapper.find('#product-size-selection option').at(2).text()).toEqual("S");
    expect(wrapper.find('#product-size-selection option').at(3).text()).toEqual("M");
    expect(wrapper.find('#product-size-selection option').at(4).text()).toEqual("L");
    expect(wrapper.find('#product-size-selection option').at(5).text()).toEqual("XL");
    expect(wrapper.find('#product-size-selection option').at(6).text()).toEqual("XXL");
  });
  it('renders OUT OF STOCK if no stock is available', () => {
    const wrapper = Enzyme.shallow(<SizeSelection
      currentStyle={currentStyle}
      outOfStock={true}
      onSelect={onSelect}
    />);
    expect(wrapper.find('#product-size-selection').length).toEqual(1);
    expect(wrapper.find('#product-size-selection option').length).toEqual(1);
    expect(wrapper.find('#product-size-selection option').text()).toEqual("OUT OF STOCK");
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