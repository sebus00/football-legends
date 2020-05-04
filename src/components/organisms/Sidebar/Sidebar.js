import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoIcon from 'assets/icons/logo.png';
import playersIcon from 'assets/icons/players.svg';
import teamsIcon from 'assets/icons/teams.svg';
import coachesIcon from 'assets/icons/coaches.svg';
import stadiumsIcon from 'assets/icons/stadiums.svg';
import logoutIcon from 'assets/icons/logout.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px 10px;
  width: 150px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.secondary};
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
  margin-bottom: 5vh;
`;

const StyledMenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMenuItem = styled.li`
  margin-bottom: 20px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledLogoutLink = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = () => (
  <StyledWrapper>
    <StyledLogoLink to="/" />
    <StyledMenuList>
      <StyledMenuItem>
        <ButtonIcon as={NavLink} to="/players" icon={playersIcon} activeclass="active" />
      </StyledMenuItem>
      <StyledMenuItem>
        <ButtonIcon as={NavLink} to="/teams" icon={teamsIcon} activeclass="active" />
      </StyledMenuItem>
      <StyledMenuItem>
        <ButtonIcon as={NavLink} to="/coaches" icon={coachesIcon} activeclass="active" />
      </StyledMenuItem>
      <StyledMenuItem>
        <ButtonIcon as={NavLink} to="/stadiums" icon={stadiumsIcon} activeclass="active" />
      </StyledMenuItem>
    </StyledMenuList>
    <StyledLogoutLink as={NavLink} to="/sign-in" icon={logoutIcon} />
  </StyledWrapper>
);

export default Sidebar;
