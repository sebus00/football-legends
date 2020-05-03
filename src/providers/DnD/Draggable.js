import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

const Draggable = ({ name, image, type, render }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, image, type },
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
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Draggable;
