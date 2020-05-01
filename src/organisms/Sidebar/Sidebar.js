import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoIcon from 'assets/icons/logo.png';
import playersIcon from 'assets/icons/players.svg';
import clubsIcon from 'assets/icons/clubs.svg';
import coachesIcon from 'assets/icons/coaches.svg';
import stadiumsIcon from 'assets/icons/stadiums.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 110px;
  height: 65px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 90%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledMenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sidebar = () => (
  <StyledWrapper>
    <StyledLogoLink to="/" />
    <StyledMenuList>
      <li>
        <ButtonIcon as={NavLink} to="/players" icon={playersIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/clubs" icon={clubsIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/coaches" icon={coachesIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/stadiums" icon={stadiumsIcon} activeclass="active" />
      </li>
    </StyledMenuList>
  </StyledWrapper>
);

export default Sidebar;
