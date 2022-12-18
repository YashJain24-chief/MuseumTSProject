import 'react-native';
import React from 'react';
import Loader from '../Loader';

import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

describe('testing loader component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Loader textToBeShown="Testing..." />);
  });

  it('checks if any child node exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Text component properly', () => {
    expect(wrapper.exists('[data-testID="textToBeShown"]')).toBe(true);
  });

  it('should render the correct prop value', () => {
    expect(wrapper.find('[data-testID="textToBeShown"]').shallow().text()).toBe(
      'Testing...',
    );
  });
});
