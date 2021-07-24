import { render } from '@testing-library/react';

import ReactXterm from './react-xterm';

describe('ReactXterm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactXterm />);
    expect(baseElement).toBeTruthy();
  });
});
