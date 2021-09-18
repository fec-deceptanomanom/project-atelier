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