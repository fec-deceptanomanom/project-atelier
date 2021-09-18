import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ProductDescription from '../subcomponents/ProductDescription.jsx';
import ProductFeatures from '../subcomponents/ProductFeatures.jsx';
import ProductImage from '../subcomponents/ProductImage.jsx';
import ProductInfo from '../subcomponents/ProductInfo.jsx';
import StyleThumbnailGrid from '../subcomponents/StyleThumbnailGrid.jsx';
import StyleThumbnail from '../subcomponents/StyleThumbnail.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe("Product Overview", function() {
  it("Should run without issue", function() {
    expect(1).toEqual(1);
  })
});

describe('Product Description', () => {
  it('renders without crashing and contains X element', () => {
    const wrapper = Enzyme.shallow(<ProductDescription info={{product: {
      slogan: "I'm a slogan!",
      description: "I'm a description!"
    }}} />);
    const tester = <h2>I'm a slogan!</h2>;
    expect(wrapper.contains(tester)).toEqual(true);
  });
});