import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

const DragDropCustomProvider = ({ draggableItems, droppableItems, render }) => {
  const [droppableItemsState, setDroppableItemsState] = useState(
    droppableItems.map((item, index) => ({
      order: index,
      accepts: [item],
      lastDroppedItem: null,
    })),
  );

  const [draggableItemsState] = useState(draggableItems);

  const [droppedItemNames, setDroppedItemNames] = useState([]);

  const isDropped = itemName => {
    return droppedItemNames.indexOf(itemName) > -1;
  };

  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedItemNames(update(droppedItemNames, name ? { $push: [name] } : { $push: [] }));
      setDroppableItemsState(
        update(droppableItemsState, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      );
    },
    [droppedItemNames, droppableItemsState],
  );

  const renderProps = {
    droppableItemsState,
    setDroppableItemsState,
    draggableItemsState,
    droppedItemNames,
    setDroppedItemNames,
    isDropped,
    handleDrop,
  };

  return render(renderProps);
};

DragDropCustomProvider.propTypes = {
  draggableItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  droppableItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  render: PropTypes.func.isRequired,
};

export default DragDropCustomProvider;
