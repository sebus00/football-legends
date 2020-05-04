import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  margin-right: auto !important;
  margin-left: auto !important;
`;

const StyledButton = styled.button`
  order: unset !important;
`;

const Pagination = ({ current, onChange, max }) => (
  <StyledWrapper className="pagination" role="navigation" aria-label="pagination">
    <StyledButton
      className="pagination-link button"
      onClick={() => {
        onChange(0);
      }}
      disabled={current <= 0}
    >
      <span className="icon is-small">
        <i className="fas fa-angle-double-left"></i>
      </span>
    </StyledButton>
    <StyledButton
      className="pagination-previous button"
      onClick={() => {
        onChange(current - 1);
      }}
      disabled={current <= 0}
    >
      <span className="icon is-small">
        <i className="fas fa-angle-left"></i>
      </span>
    </StyledButton>
    <StyledButton
      className="pagination-next button"
      onClick={() => {
        onChange(current + 1);
      }}
      disabled={current >= max}
    >
      <span className="icon is-small">
        <i className="fas fa-angle-right"></i>
      </span>
    </StyledButton>
    <StyledButton
      className="pagination-link button"
      onClick={() => {
        onChange(max);
      }}
      disabled={current >= max}
    >
      <span className="icon is-small">
        <i className="fas fa-angle-double-right"></i>
      </span>
    </StyledButton>
  </StyledWrapper>
);

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
};

export default Pagination;
