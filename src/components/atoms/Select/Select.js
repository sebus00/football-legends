import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledControl = styled.div`
  margin-bottom: 10px;
`;

const StyledSelectWrapper = styled.div`
  width: 100%;
`;

const StyledSelect = styled.select`
  width: 100%;
`;

const Select = ({ items }) => (
  <StyledControl className="control">
    <StyledSelectWrapper className="select">
      <StyledSelect>
        {items.map(({ type, typeLabel, typeItems }) => (
          <optgroup label={typeLabel} key={type}>
            {typeItems.map(({ name, label }) => (
              <option key={name}>{label}</option>
            ))}
          </optgroup>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  </StyledControl>
);

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

Select.defaultProps = {
  items: [],
};

export default Select;
