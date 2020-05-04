import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const StyledPlayer = styled(ReactPlayer)`
  background-color: ${({ theme }) => theme.color.black};
`;

const Video = ({ url, width, height, playing, ...props }) => (
  <StyledPlayer url={url} width={width} height={height} playing={playing} {...props}></StyledPlayer>
);

Video.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  playing: PropTypes.bool,
};

Video.defaultProps = {
  width: '100%',
  height: '100vh',
  playing: true,
};

export default Video;
