// use wagmi wrapper to provide wagmi client
import { render } from '../../../utils/test-utils';

import { Address } from './';

describe('Address', () => {
  it('renders without throwing', () => {
    const { container } = render(
      <Address value="0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5" />
    );
    expect(container).toBeInTheDocument();
  });
});
