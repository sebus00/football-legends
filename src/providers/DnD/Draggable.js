import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

const Draggable = ({ kit, name, type, isDropped, render }) => {
  const [{ opacity }, drag] = useDrag({
    item: { name, type, kit },
    collect: monitor => ({
      opacity: isDropped || monitor.isDragging() ? 0.4 : 1,
    }),
  });

  const renderProps = {
    ref: drag,
    style: {
      opacity: opacity || 1,
      cursor: 'move',
    },
  };

  return render(renderProps);
};

Draggable.propTypes = {
  kit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isDropped: PropTypes.bool.isRequired,
};

export default Draggable;
