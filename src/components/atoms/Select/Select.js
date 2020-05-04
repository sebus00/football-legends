import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledControl = styled.div``;

const StyledSelectWrapper = styled.div`
  width: 100%;
`;

const StyledSelect = styled.select`
  width: 100%;
  border-color: ${({ theme }) => theme.color.secondary} !important;
`;

const Select = ({ items, value, onChange }) => {
  return (
    <StyledControl className="control">
      <StyledSelectWrapper className="select is-rounded is-large">
        <StyledSelect value={value} onChange={onChange}>
          {items.map(({ type, typeLabel, typeItems }) => (
            <optgroup label={typeLabel} key={type}>
              {typeItems.map(item => (
                <option key={item.key} value={JSON.stringify({ ...item, type })}>
                  {item.label}
                </option>
              ))}
            </optgroup>
          ))}
        </StyledSelect>
      </StyledSelectWrapper>
    </StyledControl>
  );
};

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  items: [],
};

export default Select;
