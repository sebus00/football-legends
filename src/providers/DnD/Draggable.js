import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

const Draggable = ({ id, name, image, type, render }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, name, image, type },
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Draggable.defaultProps = {
  name: '',
};

export default Draggable;
