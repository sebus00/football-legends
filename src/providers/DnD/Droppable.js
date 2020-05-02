import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

const Droppable = ({ accept, lastDroppedItem, onDrop, render }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;
  let opacity = 1;
  if (isActive) {
    opacity = 1;
  } else if (canDrop) {
    opacity = 1;
  }

  const renderProps = {
    ref: drop,
    kit: lastDroppedItem && lastDroppedItem.kit,
    style: {
      opacity: opacity || 1,
      cursor: 'move',
    },
  };

  return render(renderProps);
};

Droppable.propTypes = {
  accept: PropTypes.arrayOf(PropTypes.string),
  lastDroppedItem: PropTypes.objectOf(PropTypes.string),
  onDrop: PropTypes.func.isRequired,
};

Droppable.defaultProps = {
  accept: [],
  lastDroppedItem: null,
};

export default Droppable;
