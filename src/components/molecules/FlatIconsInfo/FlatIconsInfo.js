import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
`;

const FlatIconsInfo = () => (
  <StyledWrapper>
    {' '}
    Icons made by{' '}
    <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">
      Flat Icons
    </a>{' '}
    and{' '}
    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
      Freepik
    </a>{' '}
    from{' '}
    <a href="https://www.flaticon.com/" title="Flaticon">
      {' '}
      www.flaticon.com
    </a>
  </StyledWrapper>
);

export default FlatIconsInfo;
