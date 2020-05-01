import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 45px;
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.white};
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;

  ::before,
  ::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    z-index: -1;
  }

  ::before {
    bottom: 0%;
    background-color: #fff;
    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.6, 1);
    transform-origin: center;
    opacity: 0;
  }

  ::after {
    bottom: -50%;
    background-color: #000;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.6, 1);
    transform-origin: bottom center;
    transform: scale(0);
    opacity: 0.15;
    border-radius: 50%;
  }

  :hover::before {
    opacity: 0.15;
  }

  :focus {
    outline: none;
  }

  &.mouse-down::after {
    transform: scale(2);
    transform-origin: bottom center;
  }

  &.mouse-down::before {
    opacity: 0;
  }
`;

const Button = ({ children }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <StyledButton
      className={cx({
        'mouse-down': isMouseDown,
      })}
      onMouseDown={() => {
        setIsMouseDown(true);
      }}
      onMouseUp={() => {
        setIsMouseDown(false);
      }}
      onMouseLeave={() => {
        setIsMouseDown(false);
      }}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
