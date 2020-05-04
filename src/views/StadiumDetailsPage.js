import React, { useState } from 'react';
import UserTemplate from 'templates/UserTemplate';
import emiratesStadiumVideo from 'assets/videos/emirates.mp4';
import Video from 'components/atoms/Video/Video';

const StadiumDetailsPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [stadium] = useState({});

  return (
    <UserTemplate>
      <Video url={emiratesStadiumVideo} />
    </UserTemplate>
  );
};

export default StadiumDetailsPage;
