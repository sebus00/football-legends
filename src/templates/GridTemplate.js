import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';
import UserPageTemplate from './UserTemplate';

const StyledWrapper = styled.div`
  position: relative;
  padding: 40px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px;
  justify-items: center;

  .grid-item {
    max-width: 500px;
    width: 100%;

    &:hover {
      z-index: 1;
    }

    :nth-child(1) {
      transform-origin: center top;
    }

    :nth-last-child(1) {
      transform-origin: center bottom;
    }
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);

    .grid-item:nth-child(n) {
      transform-origin: center center;
    }
  }

  @media (min-width: 1264px) {
    grid-template-columns: repeat(3, 1fr);

    .grid-item {
      :nth-child(3n + 1) {
        transform-origin: left;
      }
      :nth-child(3n + 2) {
        transform-origin: center;
      }
      :nth-child(3n) {
        transform-origin: right;
      }
      :nth-child(1) {
        transform-origin: left top;
      }
      :nth-child(2) {
        transform-origin: center top;
      }
      :nth-child(3) {
        transform-origin: right top;
      }
    }

    &.last-row-one {
      .grid-item {
        :nth-last-child(1) {
          transform-origin: left bottom;
        }
      }
    }

    &.last-row-two {
      .grid-item {
        :nth-last-child(1) {
          transform-origin: center bottom;
        }
        :nth-last-child(2) {
          transform-origin: left bottom;
        }
      }
    }

    &.last-row-three {
      .grid-item {
        :nth-last-child(1) {
          transform-origin: right bottom;
        }
        :nth-last-child(2) {
          transform-origin: center bottom;
        }
        :nth-last-child(3) {
          transform-origin: left bottom;
        }
      }
    }
  }
`;

const GridTemplate = ({ children }) => {
  const classList = cx({
    'last-row-three': children.length % 3 === 0,
    'last-row-two': children.length % 3 === 2,
    'last-row-one': children.length % 3 === 1,
  });
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledGrid className={classList}>{children}</StyledGrid>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default GridTemplate;
