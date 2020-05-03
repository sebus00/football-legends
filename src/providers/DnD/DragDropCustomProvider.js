import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

const DragDropCustomProvider = ({ droppableItems, render }) => {
  const [droppableItemsState, setDroppableItemsState] = useState(
    droppableItems.map((item, index) => ({
      order: index,
      accepts: [item],
      lastDroppedItem: null,
    })),
  );

  const [droppedItemNames, setDroppedItemNames] = useState([]);

  const isDropped = itemName => {
    return droppedItemNames.indexOf(itemName) > -1;
  };

  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;

      const isAlreadyDropped = droppedItemNames.includes(name);
      const previousDroppedItem = droppableItemsState[index].lastDroppedItem;
      const newDroppableItems = [...droppedItemNames, ...(!isAlreadyDropped ? [name] : [])].filter(
        itemName =>
          !previousDroppedItem || itemName !== previousDroppedItem.name || itemName === name,
      );

      setDroppedItemNames(newDroppableItems);

      const sameItem = droppableItemsState.find(
        ({ lastDroppedItem }) => lastDroppedItem && lastDroppedItem.name === item.name,
      );
      const newDroppableData = {
        ...(sameItem && {
          [sameItem.order]: {
            lastDroppedItem: {
              $set: null,
            },
          },
        }),
        [index]: {
          lastDroppedItem: {
            $set: item,
          },
        },
      };

      setDroppableItemsState(update(droppableItemsState, newDroppableData));
    },
    [droppedItemNames, droppableItemsState],
  );

  const renderProps = {
    droppableItemsState,
    isDropped,
    handleDrop,
  };

  return render(renderProps);
};

DragDropCustomProvider.propTypes = {
  droppableItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  render: PropTypes.func.isRequired,
};

export default DragDropCustomProvider;
