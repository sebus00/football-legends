import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

const Droppable = ({ accept, onDrop, render }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;
  const renderProps = {
    ref: drop,
    isActive,
    canDrop,
  };

  return render(renderProps);
};

Droppable.propTypes = {
  accept: PropTypes.arrayOf(PropTypes.string),
  onDrop: PropTypes.func.isRequired,
};

Droppable.defaultProps = {
  lastDroppedItem: null,
};

export default Droppable;
