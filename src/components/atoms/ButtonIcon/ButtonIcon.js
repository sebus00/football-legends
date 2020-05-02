import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 70%;
  border: none;

  &.active {
    background-color: ${({ theme }) => theme.color.white};
  }

  :focus {
    outline: none;
  }
`;

export default ButtonIcon;
