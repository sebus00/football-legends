import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import FlatIconsInfo from 'components/molecules/FlatIconsInfo/FlatIconsInfo';

const StyledWrapper = styled.div`
  padding-left: 150px;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.primary};
`;

const UserTemplate = ({ children }) => (
  <StyledWrapper>
    <Sidebar />
    {children}
    <FlatIconsInfo />
  </StyledWrapper>
);

UserTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserTemplate;
