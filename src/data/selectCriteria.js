const selectCriteria = [
  {
    type: 'global',
    typeLabel: 'Global',
    typeItems: [{ name: 'all', label: 'All players' }],
  },
  {
    type: 'position',
    typeLabel: 'By postion',
    typeItems: [
      { name: 'gkp', label: 'Goalkeepers' },
      { name: 'def', label: 'Defenders' },
      { name: 'mid', label: 'Midfielders' },
      { name: 'fws', label: 'Forwards' },
    ],
  },
  {
    type: 'team',
    typeLabel: 'By team',
    typeItems: [
      { name: 'arsenal', label: 'Arsenal' },
      { name: 'liverpool', label: 'Liverpool' },
      { name: 'manCity', label: 'Man City' },
      { name: 'manUtd', label: 'Man Utd' },
      { name: 'chelsea', label: 'Chelsea' },
      { name: 'tottenham', label: 'Tottenham' },
    ],
  },
];

export default selectCriteria;
