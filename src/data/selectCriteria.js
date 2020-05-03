const selectCriteria = [
  {
    type: 'global',
    typeLabel: 'Global',
    typeItems: [{ key: 'all', label: 'All players' }],
  },
  {
    type: 'position',
    typeLabel: 'By postion',
    typeItems: [
      { key: 'gkp', label: 'Goalkeepers' },
      { key: 'def', label: 'Defenders' },
      { key: 'mid', label: 'Midfielders' },
      { key: 'fwd', label: 'Forwards' },
    ],
  },
  {
    type: 'team',
    typeLabel: 'By team',
    typeItems: [
      { key: 1, label: 'Arsenal' },
      { key: 2, label: 'Liverpool' },
      { key: 3, label: 'Man City' },
      { key: 4, label: 'Man Utd' },
      { key: 5, label: 'Tottenham' },
      { key: 6, label: 'Chelsea' },
    ],
  },
];

export default selectCriteria;
