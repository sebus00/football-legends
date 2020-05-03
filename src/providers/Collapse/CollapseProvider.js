import { useState } from 'react';

const CollapseProvider = ({ render }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const renderProps = {
    isCollapsed,
    toggle: () => setCollapsed(!isCollapsed),
  };

  return render(renderProps);
};

export default CollapseProvider;
