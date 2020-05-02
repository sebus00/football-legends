import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import FlatIconsInfo from 'components/molecules/FlatIconsInfo/FlatIconsInfo';

const StyledWrapper = styled.div`
  padding-left: 150px;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.primary};
`;

const UserPageTemplate = ({ children }) => (
  <StyledWrapper>
    <Sidebar />
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      {children}
    </DndProvider>
    <FlatIconsInfo />
  </StyledWrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
