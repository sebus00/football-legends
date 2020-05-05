import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.2), 0 0px 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.6, 1);

  :hover {
    transform: scale(1.1);
  }
`;

const StyledName = styled.div`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: calc(0.3rem + ${({ theme }) => theme.fontSize.l});
`;

const StyledCapacity = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 5px 0 6px 0;
  display: flex;
  align-items: center;

  i {
    margin-right: 8px;
    position: relative;
    bottom: 1px;
  }
`;

const StyledAddress = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: calc(0.3rem + ${({ theme }) => theme.fontSize.xs});
  display: flex;
  align-items: flex;

  i {
    margin-right: 5px;
    position: relative;
    top: 3px;
  }
`;

const StyledImageDiv = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const StyledTeamCBadge = styled(StyledImageDiv)`
  height: 70px;
  width: 70px;
  background-size: contain;
`;

const StyledStadiumPhoto = styled(StyledImageDiv)`
  height: 300px;
  width: 100%;
  background-size: cover;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const StyledDetails = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const Stadium = ({ id, name, team, capacity, address, photo }) => {
  return (
    <StyledWrapper className="grid-item" to={`/stadiums/details/${id}`}>
      <StyledHeader>
        <StyledDetails>
          <StyledName>{name}</StyledName>
          <StyledCapacity>
            <i className="fas fa-users" />
            {capacity}
          </StyledCapacity>
          <StyledAddress>
            <i className="fas fa-map-marker-alt" />
            {address}
          </StyledAddress>
        </StyledDetails>
        <StyledTeamCBadge image={team.badge} />
      </StyledHeader>
      <StyledStadiumPhoto image={photo} />
    </StyledWrapper>
  );
};

Stadium.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.shape({
    badge: PropTypes.string.isRequired,
  }).isRequired,
  capacity: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Stadium;
