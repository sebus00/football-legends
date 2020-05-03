import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

const Draggable = ({ kit, name, type, render }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type, kit },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const renderProps = {
    ref: drag,
    isDragging,
  };

  return render(renderProps);
};

Draggable.propTypes = {
  kit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Draggable;
