import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from 'store/actions';
import GridTemplate from 'templates/GridTemplate';
import Stadium from 'components/molecules/Stadium/Stadium';

const StadiumsPage = ({ stadiums, fetchStadiums }) => {
  useEffect(() => {
    if (stadiums.length === 0) fetchStadiums();
  }, [stadiums, fetchStadiums]);

  return (
    <GridTemplate>
      {stadiums.map(item => (
        <Stadium {...item} key={item.id} />
      ))}
    </GridTemplate>
  );
};

StadiumsPage.propTypes = {
  stadiums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      team: PropTypes.object.isRequired,
      capacity: PropTypes.number.isRequired,
      address: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }),
  ),
  fetchStadiums: PropTypes.func.isRequired,
};

StadiumsPage.defaultProps = {
  stadiums: [],
};

const mapStateToProps = ({ stadiums }) => {
  return { stadiums };
};

const mapDispatchToProps = dispatch => ({
  fetchStadiums: () => dispatch(fetchItems('stadiums')),
});

export default connect(mapStateToProps, mapDispatchToProps)(StadiumsPage);
