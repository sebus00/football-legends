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

  const [droppedItemIds, setDroppedItemIds] = useState([]);

  const isDropped = itemId => {
    return droppedItemIds.indexOf(itemId) > -1;
  };

  const handleDrop = useCallback(
    (index, item) => {
      const { id } = item;
      const isAlreadyDropped = droppedItemIds.includes(id);
      const previousDroppedItem = droppableItemsState[index].lastDroppedItem;
      const newDroppableItems = [...droppedItemIds, ...(!isAlreadyDropped ? [id] : [])].filter(
        itemId => !previousDroppedItem || itemId !== previousDroppedItem.id || itemId === id,
      );

      setDroppedItemIds(newDroppableItems);

      const sameItem = droppableItemsState.find(
        ({ lastDroppedItem }) => lastDroppedItem && lastDroppedItem.id === item.id,
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
    [droppedItemIds, droppableItemsState],
  );

  const handleRemove = useCallback(
    id => {
      setDroppedItemIds(droppedItemIds.filter(item => item !== id));
      const index = droppableItemsState.findIndex(
        ({ lastDroppedItem }) => lastDroppedItem && lastDroppedItem.id === id,
      );
      const newDroppableData = {
        [index]: {
          lastDroppedItem: {
            $set: null,
          },
        },
      };
      setDroppableItemsState(update(droppableItemsState, newDroppableData));
    },
    [droppedItemIds, droppableItemsState],
  );

  const renderProps = {
    droppableItemsState,
    isDropped,
    handleDrop,
    handleRemove,
  };

  return render(renderProps);
};

DragDropCustomProvider.propTypes = {
  droppableItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  render: PropTypes.func.isRequired,
};

export default DragDropCustomProvider;
