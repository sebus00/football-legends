import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import UserTemplate from 'templates/UserTemplate';
import Video from 'components/atoms/Video/Video';
import { getSingleItem } from 'api';

const StadiumDetailsPage = ({ activeItem }) => {
  const [activeStadium, setActiveStadium] = useState(activeItem);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    const getStadium = async () => {
      const fetchedItem = await getSingleItem('stadiums', params.id);
      setActiveStadium(fetchedItem);
    };
    if (!activeStadium) getStadium();
  });

  const videoUrl = activeStadium ? activeStadium.video : null;

  const handleVideoEnds = () => {
    history.push('/stadiums');
  };

  return (
    <UserTemplate>
      <>{videoUrl && <Video url={videoUrl} onEnded={handleVideoEnds} />}</>
    </UserTemplate>
  );
};

StadiumDetailsPage.propTypes = {
  activeItem: PropTypes.shape({
    video: PropTypes.string,
  }),
};

StadiumDetailsPage.defaultProps = {
  activeItem: null,
};

const mapStateToProps = ({ stadiums }, ownProps) => {
  return {
    // eslint-disable-next-line radix
    activeItem: stadiums.find(({ id }) => parseInt(id) === parseInt(ownProps.match.params.id)),
  };
};

export default connect(mapStateToProps)(StadiumDetailsPage);
